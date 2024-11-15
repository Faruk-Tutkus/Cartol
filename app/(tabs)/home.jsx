import React, { useEffect } from 'react';
import { Colors } from './../../constants/Colors'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { interpolate, LayoutAnimationConfig, useAnimatedStyle, useSharedValue, withSpring, SlideInLeft, SlideOutRight } from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native';

import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
export default function Home() {
  const user = useUser()
  const isFocused = useIsFocused();
  const scale = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(250, {duration: 1500, damping: 15});
    } else {
      scale.value = 0;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const height = scale.value
    return {
      height
    };
  });
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 25}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="menu" size={24} color="#D8D2C2" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Faruk</Text>
        </View>
        <Animated.View style={[styles.calorieContainer, animatedStyle]}>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  header: {
    flexDirection:'row',
    width: '100%',
    height: 75,
    backgroundColor: Colors.dark.background,
    paddingTop: 10
  },
  headerText: {
    fontSize: 35,
    color: '#D8D2C2',
    marginLeft: 70,
    fontWeight:'bold'
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 5,
    textAlign:'center',
    fontSize: 40
  },
  calorieContainer: {
    backgroundColor: Colors.dark.container,
    width:'95%',
    height:250,
    borderRadius:15
  }
});
