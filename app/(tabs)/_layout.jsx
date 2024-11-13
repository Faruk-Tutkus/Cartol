import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
export default function TabLayout() {
  return (
      <Tabs
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor : '#4A4947'},
      }}
      >
        <Tabs.Screen name='home' options={{animation: 'slide_from_right'}}/>
        <Tabs.Screen name='recipe' options={{animation: 'slide_from_right'}}/>
        <Tabs.Screen name='exercise' options={{animation: 'slide_from_right'}}/>
        <Tabs.Screen name='habit' options={{animation: 'slide_from_right'}}/>
        <Tabs.Screen name='ai' options={{animation: 'slide_from_right'}}/>
      </Tabs>
  );
}
