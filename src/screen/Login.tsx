import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors, FHeight, fontStyles, FWidth} from '../../globalStyle';
import TitleComponent from '../components/Login/TitleComponent';
import KakaoLogin from '../components/Login/KakaoLogin';
import GoogleLogin from '../components/Login/GoogleLogin';
import TakeTour from '../components/Login/TakeTour';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TitleComponent />
      <KakaoLogin navigation={navigation} />
      <GoogleLogin navigation={navigation} />
      <View style={styles.textContainer}>
        <Text style={[fontStyles.M_16, styles.textColor]}>또는</Text>
      </View>
      <TakeTour navigation={navigation} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: FHeight * 56,
    paddingHorizontal: FWidth * 34,
  },
  textContainer: {
    marginTop: FHeight * 72,
    alignItems: 'center',
  },

  textColor: {
    color: colors.b400,
  },
});
