import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../globalStyle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSubBottomSheetRef} from '../store/store';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigation = async () => {
    if (await AsyncStorage.getItem('token')) {
      navigation.replace('bottomTab');
    } else {
      navigation.replace('login');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigation();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary[1],
  },
});
