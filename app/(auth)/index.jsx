import signUp from "./signUp";
import signIn from "./signIn";
import newUser from "./newUser";
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
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="newUser" component={newUser} options={{ headerShown: false }}/>
        <Stack.Screen name="signIn" component={signIn} options={{ headerShown: false }}/>
        <Stack.Screen name="signUp" component={signUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}