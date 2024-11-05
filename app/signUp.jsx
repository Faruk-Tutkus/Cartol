import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet, TextInput } from 'react-native';
import { ThemedButton } from "react-native-really-awesome-button";
import { router } from 'expo-router';
export default function SignUp() {
  return (
    <View style={styles.container}>
      <TextInput style={{width: 250, color:'red', backgroundColor: 'blue', fontSize: 25}}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
  