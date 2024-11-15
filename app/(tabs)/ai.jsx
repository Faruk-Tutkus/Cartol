import React, { useEffect } from 'react';
import { Colors } from './../../constants/Colors'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { interpolate, LayoutAnimationConfig, useAnimatedStyle, useSharedValue, withSpring, SlideInLeft, SlideOutRight } from 'react-native-reanimated'
export default function Ai() {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
