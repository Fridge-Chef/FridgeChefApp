import {Alert, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyFridgeScreen from './MyFridgeScreen';
import RecipeBookScreen from './RecipeBookScreen';
import CommunityScreen from './CommunityScreen';
import MoreScreen from './MoreScreen';
import NameComponent from './TebMenu/NameComponent';
import IconComponent from './TebMenu/IconComponent';
import {colors, fontFamilies, FWidth} from '../../../globalStyle';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const isMoreEnabled = true;
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: FWidth * 64,
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
          backgroundColor: colors.white,
        },
      })}>
      <Tab.Screen name="나의 냉장고" component={MyFridgeScreen} />
      <Tab.Screen
        name="레시피북"
        component={RecipeBookScreen}
        listeners={() => {
          return {
            tabPress: e => {
              if (!isMoreEnabled) {
                // 더보기 탭이 비활성화된 경우 알럿 띄우기
                e.preventDefault(); // 기본 탭 전환 동작 막기
                Alert.alert('안내', '더보기 기능을 사용할 수 없습니다.');
              }
            },
          };
        }}
      />
      <Tab.Screen name="나만의 레시피" component={CommunityScreen} />
      <Tab.Screen name="더보기" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
