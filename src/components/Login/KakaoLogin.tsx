import {StyleSheet, View} from 'react-native';
import React from 'react';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';
import {FWidth} from '../../../globalStyle';
import {handleKakaologin} from '../../service/Login/Kakao';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const KakaoLogin = ({navigation}: KakaoLoginProps) => {
  return (
    <FButton
      buttonStyle="loginButton"
      paddingVertical={FWidth * 16}
      buttonColor="#F9E007"
      marginBottom={FWidth * 16}
      onPress={() => handleKakaologin({navigation})}>
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
