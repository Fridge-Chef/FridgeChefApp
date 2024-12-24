import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getRefreshToken, UserLoginProps} from '../../api/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {UseMutateFunction} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  mutate: UseMutateFunction<any, Error, UserLoginProps, unknown>;
  setIsLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleGoogleSignIn = async ({
  navigation,
  mutate,
  setIsLoginLoading,
}: GoogleLoginProps) => {
  try {
    setIsLoginLoading(true);
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    console.log('구글 로그인 response', response.data);
    mutate(
      {token: response.data?.idToken!, registration: 'google'},
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
          console.log('구글 로그인 error1', error);
        },
      },
    );
  } catch (error: any) {
    setIsLoginLoading(false);
    console.log('구글 로그인 error2', error);
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
