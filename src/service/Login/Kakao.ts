import {baseUrl} from '../../api/axios';
import * as Kakao from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {userLogin} from '../../api/user';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export const handleKakaologin = async ({navigation}: KakaoLoginProps) => {
  try {
    const token = await Kakao.login();
    if (token.accessToken) {
      const user = await userLogin({
        token: token.accessToken,
        registration: 'kakao',
      });
      if (user) {
        await AsyncStorage.setItem('token', user.user.token);
        navigation.navigate('nickname');
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const handleLogout = async () => {
  try {
    const logout = await Kakao.logout();
    console.log(logout);
  } catch (error) {
    console.error(error);
  }
};
