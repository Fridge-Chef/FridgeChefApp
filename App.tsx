import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainStackScreen from './src/components/BottomTebScreen/MainStackScreen';
import FBottomSheet from './src/components/BottomSheet/FBottomSheet';
import FToast from './src/utils/FToast';
import FBottomSheetSub from './src/components/BottomSheet/BottomSheetSub/FBottomSheetSub';
import ReactQueryProvider from './src/ReactQuery/Provider';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  });

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <ReactQueryProvider>
          <NavigationContainer>
            <MainStackScreen />
            <FBottomSheet />
            <FBottomSheetSub />
          </NavigationContainer>
        </ReactQueryProvider>
      </GestureHandlerRootView>
      <FToast />
    </>
  );
}

export default App;
