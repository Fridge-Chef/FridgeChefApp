import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyFridgeScreen from './MyFridgeScreen';
import RecipeBookScreen from './RecipeBookScreen';
import CommunityScreen from './CommunityScreen';
import MoreScreen from './MoreScreen';

import NameComponent from './TebMenu/NameComponent';
import IconComponent from './TebMenu/IconComponent';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'White'}}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 64,
          elevation: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarLabel({focused}) {
          return <NameComponent focused={focused} name={route.name} />;
        },
        tabBarIcon({focused}) {
          return <IconComponent focused={focused} name={route.name} />;
        },
        headerShown: false,
        headerShadowVisible: false,
        headerBackgroundContainerStyle: {
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name="나의 냉장고" component={MyFridgeScreen} />
      <Tab.Screen name="레시피북" component={RecipeBookScreen} />
      <Tab.Screen name="커뮤니티" component={CommunityScreen} />
      <Tab.Screen name="더보기" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
