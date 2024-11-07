import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddIngredientType} from '../type/types';
import {useAddModalInputText} from '../store/store';

export const getRecommendedRecipeList = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  try {
    const response = await baseUrl.get(`api/recipes`, {
      params: {
        page,
        size,
        mainIngredients: JSON.stringify([
          {ingredient: {id: 1}},
          {ingredient: {id: 2}},
          {ingredient: {id: 3}},
        ]),
        subIngredients: JSON.stringify([
          {ingredient: {id: 4}},
          {ingredient: {id: 5}},
          {ingredient: {id: 6}},
        ]),
      },
    });
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
  formData.append('intro', data.description);
  formData.append('cookTime', data.dishTime);
  formData.append('difficult', data.dishLevel);
  formData.append('category', data.dishCategory);
  formData.append('mainImage', data.mainImage);
  data.recipeIngredients.forEach((ingredient, index) => {
    formData.append(`recipeIngredients[${index}].name`, ingredient.name);
    formData.append(`recipeIngredients[${index}].details`, ingredient.details);
  });
  data.instructions.forEach((instruction, index) => {
    formData.append(`descriptions[${index}].content`, instruction.content);
    formData.append(`descriptions[${index}].image`, instruction.image);
  });

  console.log('formData 여기까진 오는데', formData);
  try {
    const response = await baseUrl.post('api/recipes/', formData, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      console.log('레시피 추가 성공');
    }
  } catch (error) {
    console.log('레시피 추가 실패', error);
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
