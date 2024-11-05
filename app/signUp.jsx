import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet, TextInput } from 'react-native';
import { ThemedButton } from "react-native-really-awesome-button";
import { router } from 'expo-router';
export default function SignUp() {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input, { marginBottom: 10 }]}/>
      <TextInput style={[styles.input]}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4A4947'
    },
    input: {
      width: 250,
      color: '#FAF7F0',
      backgroundColor: '#656565',
      fontSize: 35,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#252525'
    }
  });
  