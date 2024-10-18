import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LogoutProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  setLogout: (logout: boolean) => void;
};

export const handleLogout = ({navigation, setLogout}: LogoutProps) => {
  setLogout(false);
  setTimeout(async () => {
    await AsyncStorage.getItem('token');
    navigation.navigate('login');
  }, 200);
};
