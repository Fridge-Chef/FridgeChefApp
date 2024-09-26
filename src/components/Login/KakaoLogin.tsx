import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const KakaoLogin = ({navigation}: KakaoLoginProps) => {
  return (
    <FButton
      buttonStyle="loginButton"
      paddingVertical={14}
      buttonColor="#F9E007"
      marginBottom={16}
      onPress={() => navigation.replace('bottomTab')}>
      <KakaoLogo />
      <LoginButtonTitle title="카카오톡 간편 로그인" />
      <View style={styles.hideIcon}>
        <KakaoLogo />
      </View>
    </FButton>
  );
};

export default KakaoLogin;

const styles = StyleSheet.create({
  hideIcon: {
    opacity: 0,
  },
});
