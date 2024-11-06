import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet } from 'react-native';
import { ThemedButton } from "react-native-really-awesome-button";
import { router } from 'expo-router';
export default function StartScreen() {
  const image = require('./../assets/images/logo.png');
  const translateYAnim = useRef(new Animated.Value(3)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Butonlar için fade animasyonu

  useEffect(() => {
    // Görsel ve yazı animasyonu
    Animated.spring(translateYAnim, {
      toValue: -100,
      friction: 5,
      tension: 5,
      useNativeDriver: true,
    }).start();

    // Butonların fade animasyonu
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#4A4947' }]}>
      <Animated.View style={[styles.logoContainer, { transform: [{ translateY: translateYAnim }] }]}>
        <Animated.Image source={image} style={styles.image} />
        <Text style={styles.text}>Cartol</Text>
      </Animated.View>
      
      <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="#656565"
          backgroundDarker="#252525"
          textColor="#FAF7F0"
          onPress={()=> {
            router.navigate('/newUser')
          }}
        >
          Yeni Kullanıcıyım
        </ThemedButton>

        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="#656565"
          backgroundDarker="#252525"
          textColor="#FAF7F0"
          style={{ marginTop: 20 }}
          onPress={()=> {
            router.navigate('/signUp')
          }}
        >
          Zaten Bir Hesabım Var
        </ThemedButton>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 48,
    color: '#FAF7F0',
    fontFamily: 'delius',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 250,
  },
});