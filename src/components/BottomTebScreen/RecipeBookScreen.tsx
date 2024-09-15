import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test02 from '../../screen/Test02';

const RecipeBookScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="test02">
      <Stack.Screen name="test02" component={Test02} />
    </Stack.Navigator>
  );
};

export default RecipeBookScreen;

const styles = StyleSheet.create({});
