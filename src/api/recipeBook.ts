import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

export const getRecipeBookItemList = async (listType: string) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get(`api/books/recipe?book=${listType}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const deleteMyRecipe = async (id: number) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.delete(`api/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error('delete error');
  }
};
