import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home'
import Login from './src/pages/Login';

import { useFonts } from './hooks/useFonts';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [isReady, setIsReady] = useState(false)

  const LoadFonts = async () => {
    await useFonts();
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => { }}
      />
    )
  } else {
    return (
      <>
        <StatusBar barStyle='default' backgroundColor='transparent' translucent />
        <Login />
      </>
    );
  }
}
