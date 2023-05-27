import React from 'react';
import { StatusBar, View } from 'react-native';

import Home from './src/pages/Home'
import Login from './src/pages/Login';

export default function App() {
  return (
    <>
      <StatusBar barStyle='default' backgroundColor='transparent' translucent />
      <Login />
    </>
  );
}
