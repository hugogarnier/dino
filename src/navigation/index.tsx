/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DinoScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import {RootStackParamList, RootTabParamList} from '../types';
import {colors} from '../theme';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const DinoStack = createNativeStackNavigator<RootStackParamList>();

const DinoStackNavigator = () => {
  return (
    <DinoStack.Navigator screenOptions={{headerShown: false}}>
      <DinoStack.Group>
        <DinoStack.Screen
          name="homeDino"
          component={HomeScreen}
        />
        <DinoStack.Screen
          name="dinosaur"
          component={DinoScreen}
        />
      </DinoStack.Group>
    </DinoStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitle: 'DINO',
        headerTitleStyle: {
          fontFamily: 'IBMPlexMono-Regular',
          fontWeight: '400',
        },
        headerTitleContainerStyle: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: colors.primaryText,
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: false,
        tabBarIcon: () => null,
        tabBarActiveTintColor: colors.primaryText,
        tabBarInactiveTintColor: colors.secondaryText,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'IBMPlexMono-Regular',
        },
        tabBarStyle: {backgroundColor: colors.background},
      }}>
      <BottomTab.Screen
        name="home"
        component={DinoStackNavigator}
      />
      <BottomTab.Screen
        name="favorites"
        component={FavoritesScreen}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
      />
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
        name="Root"
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
