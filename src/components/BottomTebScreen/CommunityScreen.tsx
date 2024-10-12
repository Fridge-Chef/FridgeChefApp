import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CRecipeReviewDetail from '../../screen/Community/CRecipeReviewDetail';
import FAppBar from '../elements/FAppBar';
import CMyRecipe from '../../screen/Community/CMyRecipe';

const CommunityScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="community">
      <Stack.Screen name="community" component={CMyRecipe} />
    </Stack.Navigator>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({});
