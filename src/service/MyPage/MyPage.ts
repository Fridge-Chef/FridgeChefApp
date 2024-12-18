import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {userDelete} from '../../api/user';
import * as Kakao from '@react-native-seoul/kakao-login';
type LogoutProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  setLogout: (logout: boolean) => void;
};

type UserDeleteProps = {
  userName: string;
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export const handleLogout = ({navigation, setLogout}: LogoutProps) => {
  setLogout(false);
  setTimeout(async () => {
    await AsyncStorage.removeItem('token');
    navigation.reset({
      index: 0,
      routes: [{name: 'login'}],
    });
  }, 200);
};

export const handleUserDelete = async ({
  userName,
  navigation,
}: UserDeleteProps) => {
  try {
    await userDelete(userName);
    setTimeout(async () => {
      await AsyncStorage.removeItem('token');
      Kakao.unlink();
      navigation.reset({
        index: 0,
        routes: [{name: 'login'}],
      });
    }, 200);
  } catch (error) {
    console.log('마이페이지 회원탈퇴', error);
  }
};
