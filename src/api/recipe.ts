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

export const getRecipeDetail = async (boardId: number) => {
  try {
    const response = await baseUrl.get(`/api/boards/${boardId}`);
    console.log('response', response);
  } catch (error) {}
};

export const addMyRecipe = async (data: AddIngredientType) => {
  const formData = new FormData();
  formData.append('mainImage', data.mainImage);
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append(
    'dishCategory',
    `${data.dishCategory.foodStyle}, ${data.dishCategory.foodType}`,
  );
  formData.append('dishTime', data.dishTime);
  formData.append('dishLevel', data.dishLevel);
  data.recipeIngredients.forEach((ingredient, index) => {
    formData.append(`recipeIngredients[${index}].name`, ingredient.name);
    formData.append(`recipeIngredients[${index}].details`, ingredient.details);
  });
  data.instructions.forEach((instruction, index) => {
    formData.append(`instructions[${index}].content`, instruction.content);
    formData.append(`instructions[${index}].image`, instruction.image);
  });

  console.log('formData', formData);
  try {
    const response = await baseUrl.post(
      'api/board',
      {formData},
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
