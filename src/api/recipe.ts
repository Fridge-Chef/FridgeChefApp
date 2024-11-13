import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddIngredientType} from '../type/types';

export const getRecommendedRecipeList = async (ingredientsQuery: string) => {
  try {
    const response = await baseUrl.get(`api/recipes/?${ingredientsQuery}`);
    return response.data;
  } catch (error) {
    console.log('추천 레시피 가져오기', error);
  }
};

export const getRecipeList = async () => {
  try {
    const response = await baseUrl.get('api/boards');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log('추천 레시피 가져오기', error);
  }
};

export const getRecipeDetail = async (boardId: number) => {
  try {
    const response = await baseUrl.get(`/api/boards/${boardId}`);
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (error) {
    console.log('레시피 상세정보 가져오기', error);
  }
};

export const addMyRecipe = async (data: AddIngredientType) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('dishTime', `${data.dishTime}분`);
  formData.append('dishLevel', data.dishLevel);
  formData.append('dishCategory', data.dishCategory);
  formData.append('mainImage', data.mainImageFile);
  data.recipeIngredients.forEach((ingredient, index) => {
    formData.append(`recipeIngredients[${index}].name`, ingredient.name);
    formData.append(`recipeIngredients[${index}].details`, ingredient.details);
  });
  data.instructions.forEach((instruction, index) => {
    formData.append(`descriptions[${index}].content`, instruction.content);
    formData.append(`descriptions[${index}].image`, instruction.imageFile);
  });

  try {
    const response = await baseUrl.post('api/board', formData, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 추가 실패', error.response.data);
    throw new Error(error);
  }
};

export const getMyFridgeList = async () => {
  try {
    const response = await baseUrl.get('api/ingredient/search');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('냉장고 재료 가져오기 에러', error.response.data);
  }
};
