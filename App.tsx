import React from 'react';
import BottomTab from './src/components/BottomTebScreen/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
