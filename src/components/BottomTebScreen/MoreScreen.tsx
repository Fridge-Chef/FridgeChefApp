import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test03 from '../../screen/Test03';
import MyPage from '../../screen/MyPage/MyPage';

const MoreScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="myPage">
      <Stack.Screen name="myPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
