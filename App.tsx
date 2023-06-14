import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/pages/routes';

import AppLoading from 'expo-app-loading';
import { useFonts } from './hooks/useFonts';

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
        <Routes />
      </>
    );
  }
}
