import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from '../../api/user';
import {UserData} from '../../type/types';
import {getRefreshToken} from '../../api/axios';

type TokenProps = {
  setUser: (user: UserData) => void;
};

export const getUserData = async ({setUser}: TokenProps) => {
  try {
    const user = await getUser();
    if (user) {
      return setUser(user);
    }
    console.log('유저 불러오기', user);
  } catch (error: any) {
    console.log('유저 가져오기', error);
    if (error.response.status === 401) {
      await getRefreshToken();
    }
  }
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};
