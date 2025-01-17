import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import RecipeBook from '../../screen/RecipeBook/RecipeBook';

const RecipeBookScreen = () => {
  const Tab = createNativeStackNavigator();
  return (
    <Tab.Navigator
      initialRouteName="recipeBookTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="recipeBookTab" component={RecipeBook} />
    </Tab.Navigator>
  );
};

export default RecipeBookScreen;

const styles = StyleSheet.create({});
