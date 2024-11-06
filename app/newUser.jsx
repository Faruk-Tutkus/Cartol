import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function NewUser() {
  const [name, setName] = useState('');
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); // Aktif sayfa numarası

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage < 3) { // Eğer toplam 3 sayfa varsa (index 0, 1, 2 olacak şekilde)
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
        setCurrentPage(nextPage);
      }
    }
  };

  const handlePrevious = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: previousPage * width, animated: true });
        setCurrentPage(previousPage);
      }
    }
  };

  const handleScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(pageIndex);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
      horizontal
      pagingEnabled
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true} // Elle kaydırma etkin
      contentContainerStyle={styles.scrollContainer}
      onScroll={handleScroll} // Sayfa değişimini takip etmek için
      scrollEventThrottle={16} // Performans için optimize edilmiş scroll takip
    >
      {/* İlk Sayfa - İsim Girişi */}
      <View style={styles.page}>
        {currentPage > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={24} color="#656565" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>İsim</Text>
        <Text style={styles.subtitle}>
          Merhaba
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="İsim"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={setName}
          />
        </View>
        <Text style={styles.note}>
          İsminiz gizli kalır ve yalnızca sizin tarafınızdan görülür.
        </Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Icon name="arrow-forward" size={24} color="#656565" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText}>Geç</Text>
        </TouchableOpacity>
      </View>

      {/* Diğer Sayfalar */}
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 1</Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Icon name="arrow-forward" size={24} color="#656565" />
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 2</Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Icon name="arrow-forward" size={24} color="#656565" />
        </TouchableOpacity>
      </View>
      {/* İstediğiniz kadar sayfa ekleyebilirsiniz */}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4947',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  page: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 300,
    height: 70,
    backgroundColor: '#656565',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#252525',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#FAF7F0',
    textAlign: 'left',
  },
  note: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginVertical: 10,
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FAF7F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#AAAAAA',
    textDecorationLine: 'underline',
  },
});
