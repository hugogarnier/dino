/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTE} from '../constants';
import {DinoScreen, FavoritesScreen, HomeScreen} from '../screens';
import {DinoFavScreen} from '../screens/DinoFavScreen';
import {colors} from '../theme';
import {RootStackParamList, RootTabParamList} from '../types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const DinoStack = createNativeStackNavigator<RootStackParamList>();

const DinoStackNavigator = () => {
  return (
    <DinoStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.background},
      }}>
      <DinoStack.Group>
        <DinoStack.Screen
          name={ROUTE.HOME_DINO}
          component={HomeScreen}
        />
        <DinoStack.Screen
          name={ROUTE.DINOSAUR}
          component={DinoScreen}
        />
      </DinoStack.Group>
    </DinoStack.Navigator>
  );
};

const DinoFavStack = createNativeStackNavigator<RootStackParamList>();

const DinoFavStackNavigator = () => {
  return (
    <DinoFavStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.background},
      }}>
      <DinoFavStack.Group>
        <DinoFavStack.Screen
          name={ROUTE.HOME_FAVORITES}
          component={FavoritesScreen}
        />
        <DinoFavStack.Screen
          name={ROUTE.DINOSAUR_FAV}
          component={DinoFavScreen}
        />
      </DinoFavStack.Group>
    </DinoFavStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={ROUTE.HOME}
      screenOptions={{
        headerTitle: 'DINO',
        headerTitleStyle: {
          fontFamily: 'IBMPlexMono-Regular',
          fontWeight: '400',
        },
        headerTitleContainerStyle: {
          alignItems: 'center',
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        tabBarIcon: () => null,
        tabBarActiveTintColor: colors.primaryText,
        tabBarInactiveTintColor: colors.secondaryText,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'IBMPlexMono-Regular',
          marginBottom: Platform.OS === 'android' ? 15 : 10,
        },
        tabBarStyle: {backgroundColor: colors.background},
      }}>
      <BottomTab.Screen
        name={ROUTE.HOME}
        component={DinoStackNavigator}
      />
      <BottomTab.Screen
        name={ROUTE.FAVORITES}
        component={DinoFavStackNavigator}
      />
      {/*<BottomTab.Screen*/}
      {/*  name="profile"*/}
      {/*  component={ProfileScreen}*/}
      {/*/>*/}
    </BottomTab.Navigator>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE.ROOT}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
