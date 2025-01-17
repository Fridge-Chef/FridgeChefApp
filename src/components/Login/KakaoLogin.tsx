import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../globalStyle';
import {useLogin} from '../../api/userQuery';
import {handleKakaologin} from '../../service/Login/Kakao';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  setIsLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const KakaoLogin = ({navigation, setIsLoginLoading}: KakaoLoginProps) => {
  const {mutate} = useLogin();
  return (
    <FButton
      buttonStyle="loginButton"
      paddingVertical={FWidth * 16}
      buttonColor="#F9E007"
      marginBottom={FWidth * 16}
      onPress={() => handleKakaologin({navigation, mutate, setIsLoginLoading})}>
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
