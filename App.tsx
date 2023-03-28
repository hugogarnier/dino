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
import {colors} from './src/theme';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider style={{backgroundColor: colors.background}}>
      {/*<SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>*/}
      <StatusBar />
      <Navigation />
      {/*</SafeAreaView>*/}
    </SafeAreaProvider>
  );
}

export default App;
