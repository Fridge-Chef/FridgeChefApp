import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
export const baseUrl = axios.create({
  baseURL: Config.BASE_URL,
});

export const getRefreshToken = async () => {
  try {
    const response = await baseUrl.get('api/auth/refresh', {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
      },
    });
    if (response.status === 200) {
      await AsyncStorage.setItem('token', response.data.token);
    }
  } catch (error) {
    console.log('토큰 재발급 실패', error);
  }
};
