/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import Navigation from './src/navigation';
import {useDinoStore} from './src/store';
import {colors} from './src/theme';

function App(): JSX.Element {
  const addDinos = useDinoStore((state) => state.addDinos);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    addDinos();
  }, [addDinos]);

  return (
    <SafeAreaProvider style={{backgroundColor: colors.background}}>
      <StatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
