import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function NewUser() {
  const [name, setName] = useState('');
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); // Aktif sayfa numarası

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
      setCurrentPage(nextPage);
    }
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* İlk Sayfa - İsim Girişi */}
      <View style={styles.page}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>İsim</Text>
        <Text style={styles.subtitle}>
          Merhaba! FatSecret uygulamasını size özel olarak kişiselleştirmek için sizi tanımak istiyoruz.
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
          <Icon name="arrow-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText}>Geç</Text>
        </TouchableOpacity>
      </View>

      {/* Diğer Sayfalar */}
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 1</Text>
        {/* İçerik */}
      </View>
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 2</Text>
        {/* İçerik */}
      </View>
      {/* İstediğiniz kadar sayfa ekleyebilirsiniz */}
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 2</Text>
        {/* İçerik */}
      </View>
      <View style={styles.page}>
        <Text style={styles.title}>Diğer Sayfa 2</Text>
        {/* İçerik */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  page: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
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
    width: '80%',
    borderWidth: 1,
    borderColor: '#32CD32',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    color: '#FFFFFF',
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
    backgroundColor: '#32CD32',
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
