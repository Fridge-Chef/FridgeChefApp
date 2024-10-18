import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import GoogleLogo from '../../utils/Svg/GoogleLogo';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';
import {handleGoogleSignIn} from '../../service/Login/Google';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const GoogleLogin = ({navigation}: GoogleLoginProps) => {
  return (
    <FButton
      buttonStyle="loginButton"
      borderWidth={1}
      paddingVertical={FWidth * 16}
      buttonColor={colors.white}
      onPress={() => handleGoogleSignIn({navigation})}>
      <GoogleLogo />
      <LoginButtonTitle title="구글 간편 로그인" />
      <View style={styles.hideIcon}>
        <GoogleLogo />
      </View>
    </FButton>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  hideIcon: {
    opacity: 0,
  },
});
