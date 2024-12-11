import React, { useState, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  useWindowDimensions
} from 'react-native';
import { Colors } from './../../constants/Colors';
import { GiftedChat, InputToolbar, Send, Bubble } from 'react-native-gifted-chat';
import { useKeyboardStatus } from './useKeyboardStatus';
import Icon from 'react-native-vector-icons/AntDesign';
import { fetchUserData, addMessageToUser } from '../../config/fetchUserData'; // Firebase yapılandırma dosyasını ekle
import { useUser } from '@clerk/clerk-expo'
import RenderHTML from 'react-native-render-html';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { server } from 'typescript';

export default function Ai() {
  const isKeyboardVisible = useKeyboardStatus();
  const [messages, setMessages] = useState([]);
  const logo = require('../../assets/images/logo.png');
  const [isFetching, setIsFetching] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageServer, setSelectedImageServer] = useState(null);
  const { user } = useUser()
  const userId = user.id
  const sortMessagesByDate = (messages) => {
    return messages.sort((b, a) => new Date(a.createdAt) - new Date(b.createdAt));
  };

  const [isModalVisible, setModalVisible] = useState(false);


  const uploadImageToServer = async (uri) => {
    try {
      const fileName = uri.split('/').pop();
      const fileExtension = fileName.split('.').pop(); // Dosya uzantısını ayır
      const formData = new FormData();
      
      formData.append('image', {
        uri,
        name: `${fileName}`, // Uzantıyı dosya adına ekle
        type: `image/${fileExtension}`, // Güncellenmiş içerik türü
      });
      console.log("Dosyaaa",formData)
      const response = await fetch('http://192.168.1.37:3000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Resim yükleme başarısız');
      }
  
      const data = await response.json();
      console.log('Yüklenen dosyanın yolu:', data.filePath);
      return data.filePath; // Sunucudaki dosya yolu
    } catch (error) {
      console.error('Resim yükleme hatası:', error);
      throw error;
    }
  };


  const openCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

      if (permissionResult.granted === false) {
        alert('Camera access is required to use this feature.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const serverUri = await uploadImageToServer(result.assets[0].uri);
        setSelectedImage(result.assets[0].uri);
        setSelectedImageServer(serverUri)
        console.log('Camera result:', result.assets.map(asset => asset.uri));
      }
    } catch (error) {
      console.error('Error opening camera:', error);
    } finally {
      setModalVisible(false);
    }
  };

  const openGallery = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Gallery access is required to use this feature.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const serverUri = await uploadImageToServer(result.assets[0].uri);
        setSelectedImage(result.assets[0].uri);
        setSelectedImageServer(serverUri)
        console.log('Gallery result:', result.assets.map(asset => asset.uri));
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    } finally {
      setModalVisible(false);
    }
  };


  useEffect(() => {
    // Bot mesajı tanımı
    const initialBotMessage = {
      _id: Math.random().toString(),
      text: 'Merhaba, sana nasıl yardımcı olabilirim?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Cartol',
        avatar: logo,
      },
      image: 'https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif', // Gönderilen GIF
    }
    const addInitialMessageIfNeeded = async () => {
      try {
        const unsubscribe = fetchUserData(userId, (userData) => {
          if (!userData?.messages || userData.messages.length === 0) {
            // Mesaj yoksa bot mesajını ekle
            addMessageToUser(userId, initialBotMessage);
            setMessages([initialBotMessage]);
          } else {
            // Mesajlar varsa onları yükle
            const loadedMessages = userData.messages.map((msg) => ({
              ...msg,
              _id: msg._id || Math.random().toString(),
              createdAt: msg.createdAt.toDate
                ? msg.createdAt.toDate()
                : new Date(),
            }));
            setMessages(sortMessagesByDate(loadedMessages));
          }
        });
  
        return () => unsubscribe();
      } catch (error) {
        console.error('Bot mesajı kontrolü sırasında hata oluştu:', error);
      }
    };
  
    addInitialMessageIfNeeded();
  }, [userId]);

  const onSend = async (newMessages = []) => {
    
    const formattedMessages = newMessages.map((message) => ({
      ...message,
      _id: message._id || Math.random().toString(),
      createdAt: message.createdAt || new Date(),
      image: selectedImage
    }));
    setSelectedImage('')
    setSelectedImageServer('')
    // Kullanıcı mesajını ekrana ekle
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, formattedMessages)
    );
  
    // Mesajları Firestore'a kaydet
    for (const message of formattedMessages) {
      await addMessageToUser(userId, message);
    }
  
    // API çağrısı sırasında yazmayı engelle
    setIsFetching(true);
    try {
      const userMessage = formattedMessages[0]; // Kullanıcının gönderdiği ilk mesaj
      const response = await fetch('http://192.168.1.37:3000/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: userMessage.text || null,
          image: selectedImageServer || null,
        }),
      });
      
      if (!response.ok) {
        console.error('API isteği başarısız:', response.status);
        return;
      }
      
      const data = await response.json();
      const botMessage = {
        _id: Math.random().toString(),
        text: data.response, // API'den dönen metin
        createdAt: new Date(),
        user: {
          _id: 2, // Bot ID'si
          name: 'Bot',
          avatar: logo, // Botun avatarı
        },
      };
    
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [botMessage])
      );
    
      // Bot mesajını Firestore'a kaydet
      await addMessageToUser(userId, botMessage);
      
    } catch (error) {
      console.error('API isteği sırasında hata:', error);
    } finally {
      // API isteği tamamlandığında yazmayı yeniden etkinleştir
      setIsFetching(false);
    }
  };

  const customSendButton = (props) => {
    const { text, onSend } = props; // isFetching props'u ekleniyor
    return (
      <TouchableOpacity
        style={[
          styles.customSendButton,
          isFetching && styles.disabledButton, // isFetching true ise ek stil
        ]}
        onPress={() => {
          if (text && onSend && !isFetching) { // isFetching kontrolü
            onSend({ text: text.trim() }, true);
          }
        }}
        disabled={isFetching} // Tıklanabilirliği kontrol et
      >
        <Text style={styles.customSendButtonText}>
          Gönder
        </Text>
      </TouchableOpacity>
    );
  };
  
  const formatText = (response) => {
    return response
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/"([^"]*)"/g, '<span class="italic">"$1"</span>');
  };

  const { width } = useWindowDimensions();
  const renderBubble = (props) => {
    const { currentMessage } = props; 
    const formattedText = formatText(currentMessage.text);
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#1A1A19',
          },
          right: {
            backgroundColor: '#B17457',
          },
        }}
        textStyle={{
          left: {
            color: '#FAF7F0',
          },
          right: {
            color: '#FAF7F0',
          },
        }}
        renderMessageText={(bubbleProps) => {
          const isLeft = bubbleProps.position === 'left';
  
          if (isLeft) {
            // Sadece sol mesajlar için RenderHTML kullan
            return (
              <View
                style={{
                  backgroundColor: '#1A1A19',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 15,
                }}
              >
                <RenderHTML
                  contentWidth={width}
                  source={{ html: formattedText}}
                  baseStyle={{ color: '#FAF7F0', fontSize: 15}} // Sol metin rengi
                  tagsStyles={{
                    strong: { fontWeight: 'bold', color: '#B17457' }, // Kalın metin stili
                    span: { fontStyle: 'italic', color: '#B17457' }, // Eğik yazı stili
                  }}
                />
              </View>
            );
          }
          return (
            <View
              style={{
                backgroundColor: '#B17457',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <RenderHTML
                contentWidth={width}
                source={{ html: currentMessage.text }}
                baseStyle={{ color: '#FAF7F0',fontSize: 15}} // Sol metin rengi
              />
            </View>
          )
        }}
      />
    );
  };

  const renderMessageImage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.image) {
      return (
        <View style={styles.messageImageContainer}>
          <Image
          source={{ uri: currentMessage.image }}
          style={styles.messageImage}
        />
        </View>
      );
    }
    return null;
  };

  const renderAvatar = (props) => {
    const { currentMessage } = props;

    if (currentMessage?.user?.avatar) {
      return (
        <View style={styles.avatarContainer}>
          <Image
            source={currentMessage.user.avatar}
            style={styles.avatar}
          />
        </View>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.chatContainer,
          {paddingBottom: isKeyboardVisible ? 0 : 125},
        ]}
      >
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
                <Icon name="camerao" size={30} color="#B17457" />
                <Text style={styles.optionText}>Kamera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={openGallery}>
                <Icon name="picture" size={30} color="#B17457" />
                <Text style={styles.optionText}>Galeri</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        placeholder={isFetching ? "Cevap bekleniyor..." : "Mesajınızı yazın..."}
        renderSend={customSendButton}
        renderInputToolbar={(props) => (
          <View style={styles.inputContainer}>
            <View style={styles.toolbar}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.iconButton}
            >
              <Icon name="pluscircle" size={25} color="#000" style={styles.icon} />
            </TouchableOpacity>
              <InputToolbar
                {...props}
                containerStyle={styles.input}
                textInputStyle={styles.textInput}
              />
            </View>
          </View>
        )}
        
        renderBubble={renderBubble}
        renderMessageImage={renderMessageImage}
        renderAvatar={renderAvatar}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    
  },
  chatContainer: {
    flex:1,
    overflow:'hidden'
  },
  customSendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    alignSelf:'center'
  },
  customSendButtonText: {
    color: '#FAF7F0',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#FAF7F0',
    borderRadius: 15,
    width: '90%',
    height: 'auto',
    minHeight:65,
    justifyContent:'center',
    alignSelf:'center',
    overflow: 'hidden',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FAF7F0',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    backgroundColor: '#FAF7F0',
    borderTopWidth: 0,
    flex: 1,
  },
  textInput: {
    color: '#FAF7F0',
    fontSize: 16,
    fontFamily: 'Roboto',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#1A1A19',
  },
  messageImageContainer: {
    margin: 5,
  },
  messageImage: {
    width: '100%',
    height: 150,
    alignContent:'center',
    resizeMode:'cover'
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 35,
    height: 60,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    width: 200,
    justifyContent: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#1A1A19',
    fontWeight:'bold'
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Tıklanamaz durum için farklı renk
  },
});