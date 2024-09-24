import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import GoogleLogo from '../Svg/GoogleLogo';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FButton from '../elements/FButton';

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
      onPress={() => navigation.replace('bottomTab')}>
      <GoogleLogo />
      <Text style={[fontStyles.B_18, styles.textColor]}>구글 로그인</Text>
      <View style={styles.hideIcon}>
        <GoogleLogo />
      </View>
    </FButton>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
    marginLeft: FWidth * 6,
  },

  hideIcon: {
    opacity: 0,
  },
});
