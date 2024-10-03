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
      <Stack.Screen
        name="reviewDetail"
        component={CRecipeReviewDetail}
        options={{
          header() {
            return (
              <FAppBar
                borderBottomWidth={1}
                type="back"
                titleOn={true}
                title="레시피 후기"
                rightOn={true}
                // onlyBackIcon={true}
                // rType1="menuIcon"
                rType2="menuIcon"
                onPress2={() => console.log('menuIcon')}
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

export default CommunityScreen;

const styles = StyleSheet.create({});
