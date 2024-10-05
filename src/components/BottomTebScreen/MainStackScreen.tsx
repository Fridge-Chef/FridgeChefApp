import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {colors} from '../../../globalStyle';
import Login from '../../screen/Login';
import FAppBar from '../elements/FAppBar';
import StorageGuide from '../../screen/MyFridge/StorageGuide';
import SplashScreen from '../../screen/SplashScreen';
import AddRecipeReview from '../../screen/MyFridge/AddRecipeReview';
import AddRecipe from '../../screen/Community/AddRecipe';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.white,
        statusBarColor: colors.white,
        statusBarStyle: 'dark',
        contentStyle: {backgroundColor: colors.white},
      }}>
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{
          statusBarColor: colors.primary[1],
          navigationBarColor: colors.primary[1],
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="addRecipe"
        component={AddRecipe}
        options={{
          title: '',
          headerShown: true,
          header() {
            return (
              <FAppBar
                type="headerClose"
                titleOn={true}
                title="나만의 레시피 작성"
                onlyBackIcon={true}
                rightOn={true}
                rType1="headerClose"
              />
            );
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="addRecipeReview"
        component={AddRecipeReview}
        options={{
          title: '',
          headerShown: true,
          header() {
            return (
              <FAppBar
                type="close3"
                titleOn={true}
                title="후기 작성"
                rightOn={true}
                rightTitleOn={true}
                rightTitle="완료"
                textOnPress={() => console.log('완료')}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="storageGuide"
        component={StorageGuide}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
