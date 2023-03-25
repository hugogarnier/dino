/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {colors} from './src/theme';

function App(): JSX.Element {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar />
        <Navigation />
      </SafeAreaView>
    </>
  );
}

export default App;
