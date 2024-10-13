import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyFridgeScreen from './MyFridgeScreen';
import RecipeBookScreen from './RecipeBookScreen';
import CommunityScreen from './CommunityScreen';
import MoreScreen from './MoreScreen';
import NameComponent from './TebMenu/NameComponent';
import IconComponent from './TebMenu/IconComponent';
import {colors, FWidth} from '../../../globalStyle';
import FModal from '../elements/FModal';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const isMoreEnabled = false;
  const [loginClicked, setLoginClicked] = useState(false);
  return (
    <>
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
                  // e.preventDefault();
                  // setLoginClicked(true);
                }
              },
            };
          }}
        />
        <Tab.Screen name="나만의 레시피" component={CommunityScreen} />
        <Tab.Screen name="설정" component={MoreScreen} />
      </Tab.Navigator>
      {loginClicked && (
        <FModal
          modalVisible={loginClicked}
          cancel
          cancelOnPress={() => {
            setLoginClicked(false);
          }}
          onPress={() => {
            setLoginClicked(false);
          }}
          text="로그인이 필요합니다."
          buttonText="로그인 하기"
          cancelText="취소"
        />
      )}
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
