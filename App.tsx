import React, { FC ,ReactElement} from 'react';
import 'react-native-gesture-handler';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Routes
import {BottomTabNavigator} from 'src/navigation/BottomTabNavigator';
import {DrawerContent} from 'src/navigation/DrawerContent';
// Drawer Creation
const Drawer = createDrawerNavigator();
const App :FC= ():ReactElement=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
