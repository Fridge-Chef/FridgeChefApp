import * as Kakao from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {getRefreshToken, UserLoginProps} from '../../api/user';
import {UseMutateFunction} from '@tanstack/react-query';

type KakaoLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  mutate: UseMutateFunction<any, Error, UserLoginProps, unknown>;
  setIsLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleKakaologin = async ({
  navigation,
  mutate,
  setIsLoginLoading,
}: KakaoLoginProps) => {
  try {
    setIsLoginLoading(true);
    const token = await Kakao.login();
    if (token.accessToken) {
      mutate(
        {token: token.accessToken, registration: 'kakao'},
        {
          onSuccess: async data => {
            setIsLoginLoading(false);
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
          onError: error => {
            setIsLoginLoading(false);
            console.log('카카오 로그인 error', error);
          },
        },
      );
    }
  } catch (e) {
    setIsLoginLoading(false);
    console.log(e);
    throw e;
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
