import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ingredients from '../../screen/Ingredients';
const MyFridgeScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="ingredients">
      <Stack.Screen
        name="ingredients"
        component={Ingredients}
        options={{
          title: '',
          headerStyle: {},
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyFridgeScreen;

const styles = StyleSheet.create({});