import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainStackScreen from './src/components/BottomTebScreen/MainStackScreen';
import FBottomSheet from './src/components/BottomSheet/FBottomSheet';
import Loading from './src/components/elements/Loading';
import FToast from './src/utils/FToast';
import {subscribeForKeyboardEvents} from 'react-native-reanimated/lib/typescript/core';
import {SlideInLeft} from 'react-native-reanimated';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <MainStackScreen />
          <FBottomSheet />
          <Loading />
        </NavigationContainer>
      </GestureHandlerRootView>
      <FToast />
    </>
  );
}

export default App;
