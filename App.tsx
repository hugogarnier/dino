/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import Navigation from './src/navigation';
import {colors} from './src/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={{backgroundColor: colors.background}}>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
