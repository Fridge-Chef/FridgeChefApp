import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import GoogleLogo from '../../utils/Svg/GoogleLogo';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const GoogleLogin = ({navigation}: GoogleLoginProps) => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response);
    } catch (error) {
      console.log('구글 로그인 error', error);
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      const aaa = await GoogleSignin.signOut();
      console.log('aaa', aaa);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FButton
      buttonStyle="loginButton"
      borderWidth={1}
      paddingVertical={FWidth * 16}
      buttonColor={colors.white}
      marginBottom={FWidth * 16}
      onPress={handleLogout}>
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
