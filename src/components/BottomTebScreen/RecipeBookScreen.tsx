import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test02 from '../../screen/Test02';
import RecRecipe from '../../screen/RecRecipe';

const RecipeBookScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="recRecipe">
      <Stack.Screen
        name="recRecipe"
        component={RecRecipe}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RecipeBookScreen;

const styles = StyleSheet.create({});
