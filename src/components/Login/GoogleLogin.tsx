import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import GoogleLogo from '../../utils/Svg/GoogleLogo';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';
import {handleGoogleSignIn} from '../../service/Login/Google';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useLogin} from '../../api/userQuery';
import Config from 'react-native-config';
type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  setIsLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const GoogleLogin = ({navigation, setIsLoginLoading}: GoogleLoginProps) => {
  const {mutate} = useLogin();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      forceCodeForRefreshToken: false,
    });
  }, []);
  return (
    <FButton
      buttonStyle="loginButton"
      borderWidth={1}
      paddingVertical={FWidth * 16}
      buttonColor={colors.white}
      onPress={() => {
        // handleLogout();
        handleGoogleSignIn({navigation, mutate, setIsLoginLoading});
      }}>
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
