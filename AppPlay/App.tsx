import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { SingnIn } from './src/screens/index';
import { StatusBar } from 'expo-status-bar';

export default function App() {

const [fontsLoaded] = useFonts ({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
});
if (!fontsLoaded) {
  // npx expo install expo-app-loading
  return <AppLoading/>
}

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent />
    <SingnIn />
    </>

    
  );
}
