import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import TabBar from "../../components/TabBar";
export default function TabLayout() {
  return (
      <Tabs
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor : '#4A4947'},
      }}
      tabBar={props => <TabBar {...props} />}
      >
        <Tabs.Screen name='home' options={{ title: 'Home'}}/>
        <Tabs.Screen name='recipe' options={{ title: 'Recipe'}}/>
        <Tabs.Screen name='ai' options={{ title: 'AI'}}/>
        <Tabs.Screen name='exercise' options={{ title: 'Exercise'}}/>
      </Tabs>
  );
}
