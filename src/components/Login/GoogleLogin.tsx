import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import GoogleLogo from '../../utils/Svg/GoogleLogo';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FButton from '../elements/FButton';
import LoginButtonTitle from './LoginButtonTitle';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const GoogleLogin = ({navigation}: GoogleLoginProps) => {
  return (
    <FButton
      buttonStyle="loginButton"
      borderWidth={1}
      paddingVertical={12}
      buttonColor={colors.white}
      marginBottom={16}
      onPress={() => navigation.replace('bottomTab')}>
      <GoogleLogo />
      <LoginButtonTitle title="구글 로그인" />
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
