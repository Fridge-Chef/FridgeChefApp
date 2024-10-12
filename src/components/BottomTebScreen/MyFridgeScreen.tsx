import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ingredients from '../../screen/MyFridge/Ingredients';
import {colors} from '../../../globalStyle';
import RecRecipe from '../../screen/MyFridge/RecRecipe';
import RecipeDetail from '../../screen/MyFridge/RecipeDetail';
import FAppBar from '../elements/FAppBar';
import FText from '../elements/FText';
import AppBarMenu from '../elements/AppBarMenu';
import {useShallow} from 'zustand/shallow';
import {useScrollY} from '../../store/store';
const MyFridgeScreen = () => {
  const Stack = createNativeStackNavigator();
  const [isClicked, setIsClicked] = useState(false);
  const {scrollY} = useScrollY();

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
            return (
              <View style={{position: 'relative'}}>
                <FAppBar
                  type="detailBack"
                  rightOn={true}
                  rType1="detailHeart"
                  rType2="detailShare"
                  rType3={'detailReviewMore'}
                  onPress1={() => {}}
                  onPress2={() => {}}
                  shadow
                  elevation={scrollY > 0 ? 5 : 0}
                  onPress3={() => setIsClicked(!isClicked)}
                />
                {isClicked && <AppBarMenu />}
              </View>
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
