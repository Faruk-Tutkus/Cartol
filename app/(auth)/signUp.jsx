import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignUp() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedRePassword, setIsFocusedRePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const emailLabelAnim = useRef(new Animated.Value(0)).current;
  const passwordLabelAnim = useRef(new Animated.Value(0)).current;
  const rePasswordLabelAnim = useRef(new Animated.Value(0)).current;
  //const fadeAnim = useRef(new Animated.Value(0)).current;

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

    Animated.timing(rePasswordLabelAnim, {
      toValue: isFocusedRePassword || rePassword ? -35 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isFocusedEmail, isFocusedPassword, isFocusedRePassword, email, password]);

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
            <View style={[styles.inputContainer]}>
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
            </View>

            <View style={[styles.inputContainer, { marginTop: 20 }]}>
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
            </View>

            <View style={[styles.inputContainer, { marginTop: 20 }]}>
              <Icon name="lock" size={24} color="#FAF7F0" style={styles.icon} />
              <Animated.Text style={animatedLabelStyle(rePasswordLabelAnim)}>Şifre Tekrar</Animated.Text>
              <TextInput
                value={rePassword}
                onChangeText={setRePassword}
                onFocus={() => setIsFocusedRePassword(true)}
                onBlur={() => setIsFocusedRePassword(false)}
                secureTextEntry={!showRePassword}
                cursorColor={'#FAF7F0'}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setShowRePassword(!showRePassword)} style={styles.eyeIcon}>
                <Icon name={showRePassword ? "eye-off" : "eye"} size={24} color="#FAF7F0" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Üye Ol</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/google.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Google ile Üye Ol</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/facebook.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Facebook ile Üye Ol</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./../../assets/images/apple.png')} style={styles.socialLogo} />
              <Text style={styles.socialButtonText}>Apple ile Üye Ol</Text>
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
  line: {
    backgroundColor: '#FAF7F0',
    marginTop:35,
    width:300,
    height:2,
    alignSelf:'center'
  },
  socialButtonsContainer: {
    marginTop: 20,
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
