import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

export type UserLoginProps = {
  token: string;
  registration: string;
};

type UserNicknameProps = {
  nickname: string;
};

export const getRefreshToken = async (token: string) => {
  try {
    const response = await baseUrl.get('api/auth/refresh', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log('리프레시 토큰', response.data.user.refreshToken);
      await AsyncStorage.setItem(
        'refreshToken',
        response.data.user.refreshToken,
      );
    }
  } catch (error) {
    console.log('refreshToken 토큰 발급 실패', error);
  }
};

export const getUSerToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  console.log('리프레시 토큰', refreshToken);
  try {
    const response = await baseUrl.get('api/auth/access', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    console.log('여기까지 오나', response);
    if (response.status === 200) {
      await AsyncStorage.setItem('token', response.data.user.token);
    }
    console.log('유저 토큰 재발급', response);
  } catch (error) {
    console.log('토큰 재발급 에러', error);
  }
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
  if (!(await AsyncStorage.getItem('token'))) return;
  const userToken = await AsyncStorage.getItem('token');
  try {
    const response = await baseUrl.get('/api/user', {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('유저토큰 가져오기', error.response.status);
    if (userToken && error.response.status === 401) {
      console.log('토큰 재발급1');
      await getUSerToken();
    }
  }
};

export const userDelete = async (nickname: string) => {
  console.log('회원탈퇴', nickname);
  try {
    const response = await baseUrl.delete('api/user/account', {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
      data: {username: nickname},
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log('유저 삭제', error);
  }
};
