import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ingredients from '../../screen/MyFridge/Ingredients';
import {colors} from '../../../globalStyle';
import RecRecipe from '../../screen/MyFridge/RecRecipe';
import RecipeDetail from '../../screen/MyFridge/RecipeDetail';
import AppBarComponent from '../elements/AppBarComponent';

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
              <AppBarComponent
                borderBottomWidth={1}
                leftIcon={{icon: 'back'}}
                leftIconWidth={24}
                leftIconHeight={24}
                titleOn={true}
                title="추천 레시피"
                onlyBackIcon={true}
                rightOn={true}
                rightIcon1={{icon: 'back'}}
                rightIconWidth1={24}
                rightIconHeight1={24}
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
            return (
              <AppBarComponent
                leftIcon={{icon: 'back'}}
                leftIconWidth={24}
                leftIconHeight={24}
                rightOn={true}
                rightIcon1={{icon: 'heart4'}}
                rightIconWidth1={24}
                rightIconHeight1={24}
                rightIcon2={{icon: 'arrowLeft3'}}
                rightIconWidth2={24}
                rightIconHeight2={24}
              />
            );
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
