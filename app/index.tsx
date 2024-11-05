import Splash from "./splashScreen";
import startScreen from "./startScreen";
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SystemUI from "expo-system-ui";
import { SplashScreen } from "expo-router";
const Stack = createStackNavigator();
SystemUI.setBackgroundColorAsync("transparent");
SplashScreen.preventAutoHideAsync()
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
          <Stack.Screen name="startScreen" component={startScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
