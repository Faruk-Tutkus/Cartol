import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLabelAnim = useRef(new Animated.Value(0)).current;
  const passwordLabelAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  useEffect(() => {
    Animated.timing(emailLabelAnim, {
      toValue: isFocusedEmail || email ? -35 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(passwordLabelAnim, {
      toValue: isFocusedPassword || password ? -35 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isFocusedEmail, isFocusedPassword, email, password]);

  const animatedLabelStyle = (animation) => ({
    transform: [{ translateY: animation }],
    fontSize: 20,
    color: '#FAF7F0',
    position: 'absolute',
    left: 45,
    top: 20,
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={[styles.container]}>
          <View>
            <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
              <Icon name="email" size={24} color="#FAF7F0" style={styles.icon} />
              <Animated.Text style={animatedLabelStyle(emailLabelAnim)}>E-mail</Animated.Text>
              <TextInput
                value={email}
                onChangeText={handleEmailChange}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
                autoCapitalize="none"
                keyboardType="email-address"
                cursorColor={'#FAF7F0'}
                style={styles.input}
              />
            </Animated.View>

            <Animated.View style={[styles.inputContainer, { opacity: fadeAnim, marginTop: 20 }]}>
              <Icon name="lock" size={24} color="#FAF7F0" style={styles.icon} />
              <Animated.Text style={animatedLabelStyle(passwordLabelAnim)}>Şifre</Animated.Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                secureTextEntry={!showPassword}
                cursorColor={'#FAF7F0'}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#FAF7F0" />
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Şifrenizi mi unuttunuz?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/google.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Google ile Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/facebook.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Facebook ile Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/apple.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Apple ile Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4947',
    paddingHorizontal: 20,
    padding: 100,
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
    paddingLeft: 40,
    textAlign: 'left',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#FAF7F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#4A4947',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#FAF7F0',
    fontSize: 16,
    marginTop: 15,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  socialButtonsContainer: {
    marginTop: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF7F0',
    borderRadius: 10,
    width: 300,
    height: 50,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  socialLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#4A4947',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
