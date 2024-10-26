import * as Kakao from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {getRefreshToken, userLogin, UserLoginProps} from '../../api/user';
import {UseMutateFunction} from '@tanstack/react-query';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  mutate: UseMutateFunction<any, Error, UserLoginProps, unknown>;
};

export const handleKakaologin = async ({
  navigation,
  mutate,
}: KakaoLoginProps) => {
  try {
    const token = await Kakao.login();
    if (token.accessToken) {
      mutate(
        {token: token.accessToken, registration: 'kakao'},
        {
          onSuccess: async data => {
            await AsyncStorage.setItem('token', data.user.token);
            await getRefreshToken(data.user.token);
            if (await AsyncStorage.getItem('nickname')) {
              navigation.reset({
                index: 0,
                routes: [{name: 'bottomTab'}],
              });
            } else {
              navigation.reset({
                index: 0,
                routes: [{name: 'nickname'}],
              });
            }
          },
        },
      );
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
