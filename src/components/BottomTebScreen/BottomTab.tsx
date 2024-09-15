import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyFridgeScreen from './MyFridgeScreen';
import RecipeBookScreen from './RecipeBookScreen';
import CommunityScreen from './CommunityScreen';
import MoreScreen from './MoreScreen';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const [name, setName] = useState('');

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'White'}}
      screenListeners={{
        state: e => {
          const currentRouteName = e.data.state.routeNames[e.data.state.index];
          setName(currentRouteName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarStyle: {
          height: 60,
          elevation: 0,
        },
        tabBarItemStyle: {
          borderTopWidth: name === route.name ? 1 : 1,
          borderColor: name === route.name ? 'black' : '#AFB1B6',
          elevation: 0,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarLabel({focused}) {
          return (
            <Text
              style={{
                color: focused ? 'black' : '#AFB1B6',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {route.name}
            </Text>
          );
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
