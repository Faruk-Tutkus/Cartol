import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 25}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4947',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#FAF7F0',
    fontWeight: 'bold',
  },
  calorieContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  calorieInfo: {
    alignItems: 'center',
  },
  calorieText: {
    color: '#FAF7F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calorieValue: {
    color: '#FAF7F0',
    fontSize: 16,
  },
  progressCircle: {
    alignItems: 'center',
  },
  percentage: {
    fontSize: 36,
    color: '#FAF7F0',
    fontWeight: 'bold',
  },
  totalCalories: {
    color: '#FAF7F0',
    fontSize: 14,
  },
  macronutrients: {
    width: '100%',
    marginBottom: 20,
  },
  macroLabel: {
    color: '#FAF7F0',
    fontSize: 14,
    fontWeight: 'bold',
  },
  macroAmount: {
    color: '#FAF7F0',
    fontSize: 12,
    marginBottom: 4,
  },
  macroBar: {
    height: 6,
    borderRadius: 3,
    marginBottom: 10,
    width: '100%',
  },
  adSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  adText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  permissionSection: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  permissionTitle: {
    color: '#FAF7F0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  permissionDescription: {
    color: '#FAF7F0',
    fontSize: 14,
  },
});
