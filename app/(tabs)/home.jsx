import React from 'react';
import { Colors } from './../../constants/Colors'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
export default function Home() {
  const user = useUser()
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 25}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Icon name="menu" size={24} color="#FAF7F0" style={styles.icon} />
          <Text style={styles.headerText}>Faruk</Text>
        </View>
        <View style={styles.calorieContainer}>

        </View>
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
    color: Colors.dark.text,
    marginLeft: 70,
    fontWeight:'bold'
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 15,
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
