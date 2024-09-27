import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {colors} from '../../../globalStyle';
import Login from '../../screen/Login';
import AddRecipe from '../../screen/Community/AddRecipe';
import FAppBar from '../elements/FAppBar';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.white,
        statusBarColor: colors.white,
        statusBarStyle: 'dark',
        contentStyle: {backgroundColor: colors.white},
      }}>
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{
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
        name="addRecipe"
        component={AddRecipe}
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
    </Stack.Navigator>
  );
};

export default MainStackScreen;
