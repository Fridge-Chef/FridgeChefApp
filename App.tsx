import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainStackScreen from './src/components/BottomTebScreen/MainStackScreen';
import FBottomSheet from './src/components/BottomSheet/FBottomSheet';
import Loading from './src/components/elements/Loading';
import FToast from './src/utils/FToast';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

function App() {
  const googleSignInConfigure = () => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_OAUTH_TYPE3_CLIENT_ID,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  });

  useEffect(() => {
    googleSignInConfigure();
  }, []);

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
