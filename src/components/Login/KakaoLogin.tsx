import {StyleSheet, View} from 'react-native';
import React from 'react';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';
import * as Kakao from '@react-native-seoul/kakao-login';
import {baseUrl} from '../../api/axios';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const KakaoLogin = ({navigation}: KakaoLoginProps) => {
  const handleKakaologin = async () => {
    try {
      const token = await Kakao.login();
      if (token.accessToken !== null) {
        const response = await baseUrl.post('api/mobile/auth/login', {
          token: token.accessToken,
          registration: 'kakao',
        });
        console.log('나오냐', response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      const logout = await Kakao.logout();
      console.log(logout);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FButton
      buttonStyle="loginButton"
      paddingVertical={14}
      buttonColor="#F9E007"
      marginBottom={16}
      onPress={handleKakaologin}>
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
