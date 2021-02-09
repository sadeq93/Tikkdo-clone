import React, { FC ,ReactElement} from 'react';
import 'react-native-gesture-handler';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';

//redux
import {Provider} from 'react-redux';
import {store, appPersist} from 'src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

// Routes
import {BottomTabNavigator} from 'src/navigation/BottomTabNavigator';

const App :FC= ():ReactElement=> {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <NavigationContainer>
           <BottomTabNavigator/>
        </NavigationContainer>
       </PersistGate>
     </Provider>
  );
};

export default App;
