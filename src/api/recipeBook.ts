import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

export const getLikedRecipeList = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get('api/books/recipe?book=LIKE', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error: any) {
    console.log(error.response.data);
  }
};
