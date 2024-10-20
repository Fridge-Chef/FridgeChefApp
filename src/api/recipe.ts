import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddIngredientType} from '../type/types';

export const getRecipeList = async () => {
  try {
    const response = await baseUrl.get('api/boards');
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log('추천 레시피 가져오기', error);
  }
};

export const addMyRecipe = async (data: AddIngredientType) => {
  try {
    const response = await baseUrl.post(
      'api/board',
      {data},
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      },
    );
    if (response.status === 200) {
      console.log('레시피 추가 성공');
    }
  } catch (error) {
    console.log('레시피 추가 실패', error);
  }
};
