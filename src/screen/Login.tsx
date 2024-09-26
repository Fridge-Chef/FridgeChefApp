import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors, FHeight, fontStyles, FWidth} from '../../globalStyle';
import TitleComponent from '../components/Login/TitleComponent';
import KakaoLogin from '../components/Login/KakaoLogin';
import GoogleLogin from '../components/Login/GoogleLogin';
import TakeTour from '../components/Login/TakeTour';
import FText from '../components/elements/FText';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TitleComponent />
      <KakaoLogin navigation={navigation} />
      <GoogleLogin navigation={navigation} />
      <View style={styles.textContainer}>
        <FText fStyle="M_16" color={colors.b400} text="또는" />
      </View>
      <TakeTour navigation={navigation} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 56,
    paddingHorizontal: FWidth * 34,
    backgroundColor: colors.white,
  },
  textContainer: {
    marginTop: FWidth * 72,
    alignItems: 'center',
  },
});
