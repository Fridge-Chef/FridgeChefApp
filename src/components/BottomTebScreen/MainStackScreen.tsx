import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
