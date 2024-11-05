import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
export default function RootLayout() {

  const [loaded, error] = useFonts({
    'delius': require('./../assets/fonts/Delius-Regular.ttf'),
    'delius-bold': require('./../assets/fonts/DeliusUnicase-Bold.ttf'),
    'pacifico': require('./../assets/fonts/Pacifico-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor : '#00000000'},
      }}
    >
      <Stack.Screen name="index"  options={{animation: 'fade'}}/>
      <Stack.Screen name="splashScreen" options={{animation: 'fade'}}/>
      <Stack.Screen name="startScreen"  options={{animation: 'none'}}/>
      <Stack.Screen name="newUser"  options={{animation: 'fade'}}/>
      <Stack.Screen name="signUp"  options={{animation: 'fade'}}/>
    </Stack>
  );
}
