import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import LikePage from './LikePage';
import MyRecipePage from './MyRecipePage';
import RecipeReviewPage from './RecipeReviewPage';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

const RecipeBook = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.disabled,
        tabBarLabelStyle: fontStyles.B_16,
        tabBarStyle: {
          height: FWidth * 54,
          justifyContent: 'center',
          elevation: 0,
          borderBottomWidth: 1,
          borderColor: colors.b200,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
          marginBottom: -1,
        },
        tabBarPressColor: colors.white,
      }}>
      <Tab.Screen name="좋아요" component={LikePage} key={'좋아요'} />
      <Tab.Screen
        name="나만의 레시피"
        component={MyRecipePage}
        key={'나의 레시피'}
      />
      <Tab.Screen
        name="레시피 후기"
        component={RecipeReviewPage}
        key={'레시피 후기'}
      />
    </Tab.Navigator>
  );
};

export default RecipeBook;

const styles = StyleSheet.create({});
