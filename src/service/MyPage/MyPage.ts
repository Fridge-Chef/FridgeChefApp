import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LogoutProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  setLogout: (logout: boolean) => void;
};

export const handleLogout = async ({navigation, setLogout}: LogoutProps) => {
  setLogout(false);
  await AsyncStorage.getItem('token');
  setTimeout(() => {
    navigation.navigate('login');
  }, 200);
};
