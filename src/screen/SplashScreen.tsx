import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, FWidth} from '../../globalStyle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FText from '../components/elements/FText';

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
      <FText
        mTop={FWidth * 32}
        fStyle="B_20"
        color={colors.text}
        text={'오늘은 냉장고 터는 날!'}
      />
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
