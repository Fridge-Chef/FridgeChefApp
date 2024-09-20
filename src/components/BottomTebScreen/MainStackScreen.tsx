import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{
          title: '',
          headerStyle: {},
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;

const styles = StyleSheet.create({});
