import React, { ReactElement } from 'react';
import  { TouchableWithoutFeedback } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Import Screens
 import {HomeScreen} from "src/screens/HomeScreen"
 import {BookmarksScreen} from "src/screens/BookmarksScreen"

//Import Icons
import {Icons} from 'src/library';
const {home, home_o, bookmark, bookmark_o} = Icons;

// Stacks Creation
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

// Bottom Tab Creation
const Tab = createBottomTabNavigator();

// Main Stack Screen
function MainStackScreen() :ReactElement{
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Bookmarks" component={BookmarksScreen} />
    </MainStack.Navigator>
  );
}

// Root Stack Screen
function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={MainStackScreen} />
    </RootStack.Navigator>
  );
}
// Bottom Tab Navigator
export const BottomTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}>
    <Tab.Screen
      name="Root"
      component={RootStackScreen}
      options={{
        tabBarIcon: ({focused}) => (focused ? home : home_o),
      }}
    />

    <Tab.Screen
      name="Bookmarks"
      component={BookmarksScreen}
      options={{
        tabBarIcon: ({focused}) => (focused ? bookmark : bookmark_o),
      }}
    />
  </Tab.Navigator>
);
