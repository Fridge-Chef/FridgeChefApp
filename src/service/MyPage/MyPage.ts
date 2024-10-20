import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {userDelete} from '../../api/user';

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
    const user = await userDelete(userName);
    console.log('마이페이지 회원탈퇴', user);
  } catch (error) {
    console.log('마이페이지 회원탈퇴', error);
  }
};
