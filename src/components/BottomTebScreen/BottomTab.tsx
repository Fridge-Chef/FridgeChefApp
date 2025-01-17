import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FModal from '../elements/FModal';
import CommunityScreen from './CommunityScreen';
import MoreScreen from './MoreScreen';
import MyFridgeScreen from './MyFridgeScreen';
import RecipeBookScreen from './RecipeBookScreen';
import IconComponent from './TebMenu/IconComponent';
import NameComponent from './TebMenu/NameComponent';
const BottomTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const Tab = createBottomTabNavigator();
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
              tabPress: async e => {
                e.preventDefault();
                const userToken = await AsyncStorage.getItem('token');
                if (!userToken) {
                  setLoginClicked(true);
                } else {
                  navigation.navigate('레시피북');
                }
              },
            };
          }}
        />
        <Tab.Screen name="모든 레시피" component={CommunityScreen} />
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
            navigation.navigate('serviceLogin');
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
