import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

type UserLoginProps = {
  token: string;
  registration: string;
};

type UserNicknameProps = {
  nickname: string;
};

export const userLogin = async ({token, registration}: UserLoginProps) => {
  try {
    const response = await baseUrl.post('api/mobile/auth/login', {
      token: token,
      registration: registration,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log('로그인 페이지', error);
  }
};

export const userUpdateNickname = async ({nickname}: UserNicknameProps) => {
  try {
    const response = await baseUrl.patch(
      '/api/user/name',
      {username: nickname},
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      },
    );
    return response.status;
  } catch (error) {
    console.log('닉네임 페이지', error);
  }
};

export const getUser = async () => {
  try {
    const response = await baseUrl.get('/api/user', {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log('유저 가져오기', error);
  }
};
