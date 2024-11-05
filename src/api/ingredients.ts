import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

export type Ingredients = {
  ingredients: {
    ingredientName: string;
    storage: string;
  }[];
};

export type IngredientCategory = {
  category: string;
  expiryDate: string;
};

export const addIngredients = async ({ingredients}: Ingredients) => {
  console.log('재료등록 요청', ingredients);
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);

    const response = await baseUrl.post('api/fridges/', ingredients, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('재료등록 성공', response);
  } catch (error: any) {
    console.log('재료등록 실패', error.response.data);
    throw new Error('재료등록 실패');
  }
};

export const getIngredients = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get('api/fridges/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log('재료가져오기 성공', response.data);
      return response.data;
    }
  } catch (error: any) {
    console.log('재료가져오기 실패', error.response.data);
    return [];
  }
};

export const deleteIngredients = async (title: string) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.delete(`/api/fridges/ingredients/${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 204) {
      console.log('재료 삭제 성공');
    }
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const addIngredientCategory = async (data: IngredientCategory) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.post('api/categories/', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('카테고리 추가 성공', response);
  } catch (error: any) {
    console.log(error.response.data);
  }
};
