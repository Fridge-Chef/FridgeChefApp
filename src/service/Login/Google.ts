import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getRefreshToken, UserLoginProps} from '../../api/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {UseMutateFunction} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  mutate: UseMutateFunction<any, Error, UserLoginProps, unknown>;
};

export const handleGoogleSignIn = async ({
  navigation,
  mutate,
}: GoogleLoginProps) => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    console.log('구글 로그인 response', response.data);
    mutate(
      {token: response.data?.idToken!, registration: 'google'},
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
  } catch (error: any) {
    console.log('구글 로그인 error', error);
  }
};

export const handleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    const aaa = await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};
