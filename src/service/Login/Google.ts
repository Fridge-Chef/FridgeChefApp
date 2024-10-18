import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {userLogin} from '../../api/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type GoogleLoginProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export const handleGoogleSignIn = async ({navigation}: GoogleLoginProps) => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (response.data?.idToken) {
      const user = await userLogin({
        token: response.data.idToken,
        registration: 'google',
      });
      if (user) {
        console.log('구글 로그인 response', user);
      }
    }
  } catch (error) {
    console.log('구글 로그인 error', error);
  }
};

export const handleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    const aaa = await GoogleSignin.signOut();
    console.log('aaa', aaa);
  } catch (error) {
    console.error(error);
  }
};
