import React from 'react';
import {View, Text, Button} from 'react-native';

export const DrawerContent = ({navigation}) => {
  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Home" onPress={() => navigation.navigate('Main')} />
      <Button
        title="Bookmarks"
        onPress={() => navigation.navigate('Bookmarks')}
      />
    </View>
  );
};
