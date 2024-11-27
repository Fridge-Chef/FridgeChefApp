import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {colors} from '../../../globalStyle';

import FAppBar from '../elements/FAppBar';
import StorageGuide from '../../screen/MyFridge/StorageGuide';
import SplashScreen from '../../screen/SplashScreen';
import AddRecipeReview from '../../screen/MyFridge/AddRecipeReview';
import AddRecipe from '../../screen/Community/AddRecipe';
import AddRecipePreview from '../../screen/Community/AddRecipePreview';
import NicknamePage from '../../screen/NicknamePage';
import AddBasic from '../../screen/AddBasic';
import CRecipeReviewDetail from '../../screen/Community/CRecipeReviewDetail';
import AddReviewAppBar from './AppBar/AddReviewAppBar';
import ReviewDetailAppBar from './AppBar/ReviewDetailAppBar';
import AddRecipeAppBar from './AppBar/AddRecipeAppBar';
import Login from '../../screen/Login/Login';
import ServiceLogin from '../../screen/Login/ServiceLogin';
import UserReview from '../Community/UserReview/UserReview';
import MyRecipeDetailAppBar from './AppBar/MyRecipeDetailAppBar';

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
        name="serviceLogin"
        component={ServiceLogin}
        options={{
          header() {
            return (
              <FAppBar
                type="detailBack"
                titleOn={true}
                title="로그인"
                onlyBackIcon={true}
                rightOn={true}
                rType1="detailBack"
                borderBottomWidth={1}
              />
            );
          },
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="nickname"
        component={NicknamePage}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="addBasic"
        component={AddBasic}
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
        name="reviewDetail"
        component={CRecipeReviewDetail}
        options={{
          header() {
            return <MyRecipeDetailAppBar />;
          },
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="userReviewDetail"
        component={UserReview}
        options={{
          header() {
            return <ReviewDetailAppBar />;
          },
          headerShown: true,
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
            return <AddRecipeAppBar />;
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="preview"
        component={AddRecipePreview}
        options={{
          title: '',
          headerShown: true,
          header() {
            return (
              <FAppBar
                type="detailBack"
                // onlyBackIcon={true}
                rightOn={true}
                rType1="detailHeart"
                rType2="detailShare"
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
            return <AddReviewAppBar />;
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
