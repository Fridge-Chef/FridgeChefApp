import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TitleComponent from '../../components/Login/TitleComponent';
import {colors, FWidth} from '../../../globalStyle';
import KakaoLogin from '../../components/Login/KakaoLogin';
import GoogleLogin from '../../components/Login/GoogleLogin';
import TakeTour from '../../components/Login/TakeTour';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TitleComponent />
      <View style={{alignItems: 'center', marginBottom: FWidth * 64}}>
        <Image
          style={{width: FWidth * 127, height: FWidth * 137}}
          source={require('../../assets/images/LogoImg.png')}
          alt="로고이미지"
        />
      </View>
      <KakaoLogin navigation={navigation} />
      <GoogleLogin navigation={navigation} />
      <TakeTour navigation={navigation} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 96,
    paddingHorizontal: FWidth * 34,
    backgroundColor: colors.white,
  },
});
