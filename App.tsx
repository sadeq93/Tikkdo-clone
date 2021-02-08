import React, { FC ,ReactElement} from 'react';
import 'react-native-gesture-handler';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';

// Routes
import {BottomTabNavigator} from 'src/navigation/BottomTabNavigator';

const App :FC= ():ReactElement=> {
  return (
    <NavigationContainer>
    <BottomTabNavigator/>
    </NavigationContainer>
  );
};

export default App;
