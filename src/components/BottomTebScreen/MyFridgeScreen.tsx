import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ingredients from '../../screen/MyFridge/Ingredients';
import {colors} from '../../../globalStyle';
import RecRecipe from '../../screen/MyFridge/RecRecipe';
import RecipeDetail from '../../screen/MyFridge/RecipeDetail';
import FAppBar from '../elements/FAppBar';
import RecipeDetailAppBar from './AppBar/RecipeDetailAppBar';
const MyFridgeScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.white},
      }}
      initialRouteName="ingredients">
      <Stack.Screen
        name="ingredients"
        component={Ingredients}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="recRecipe"
        component={RecRecipe}
        options={{
          title: '',
          header() {
            return (
              <FAppBar
                borderBottomWidth={1}
                type="back"
                titleOn={true}
                title="추천 레시피"
                onlyBackIcon={true}
                rightOn={true}
                rType2="back"
              />
            );
          },
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="recipeDetail"
        component={RecipeDetail}
        options={{
          title: '',
          header() {
            return <RecipeDetailAppBar />;
          },
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyFridgeScreen;

const styles = StyleSheet.create({});
