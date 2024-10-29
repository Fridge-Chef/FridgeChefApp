import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';

export type Ingredients = {
  ingredients: {
    ingredientName: string;
    storage: string;
  }[];
};

export const addIngredients = async ({ingredients}: Ingredients) => {
  console.log('재료등록', ingredients);
  try {
    const response = await baseUrl.post(
      'api/fridges',
      {
        ingredients,
      },
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      },
    );
    console.log('재료등록1', response);
  } catch (error) {
    console.log('재료등록 실패', error);
    throw new Error('재료등록 실패');
  }
};
