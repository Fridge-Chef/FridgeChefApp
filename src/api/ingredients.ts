import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {ListData} from '../type/types';

export type Ingredients = {
  ingredients: {
    ingredientName: string;
    storage: string;
  }[];
};

export type IngredientCategory = {
  name: string;
  category: string;
  date: string;
};

export type IngredientsType = {
  itemList: ListData[];
};

export const addIngredients = async ({ingredients}: Ingredients) => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);

    const response = await baseUrl.post('api/fridges/', ingredients, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.log('재료등록 실패', error.response.data);
    throw new Error('재료등록 실패');
  }
};

export const addIngredients2 = async ({itemList}: IngredientsType) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.post('api/fridges/ingredients', itemList, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error: any) {
    console.log('재료2 에러', error.response.data);
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
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 204) {
      console.log('재료 삭제 성공');
    }
  } catch (error: any) {
    console.log('재료삭제 에러', error.response.data);
  }
};

export const addIngredientCategory = async (data: IngredientCategory) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.put('api/fridges/ingredients', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 204) {
      return response.data;
    }

    return response.data;
  } catch (error: any) {
    console.log('카테고리 에러', error.response.data);
  }
};
