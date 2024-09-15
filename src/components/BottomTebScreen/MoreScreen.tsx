import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test03 from '../../screen/Test03';

const MoreScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="test03">
      <Stack.Screen name="test03" component={Test03} />
    </Stack.Navigator>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
