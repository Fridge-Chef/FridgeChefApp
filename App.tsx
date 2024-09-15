import React, {useEffect} from 'react';
import BottomTab from './src/components/BottomTebScreen/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
