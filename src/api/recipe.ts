import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddIngredientType} from '../type/types';

export const getRecommendedRecipeList = async (ingredientsQuery: string) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get(`api/recipes/?${ingredientsQuery}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    return response.data;
  } catch (error) {
    console.log('추천 레시피 가져오기', error);
  }
};

export const getRecipeList = async ({
  page,
  size,
  issue,
  sort,
}: {
  page: number;
  size: number;
  issue: string;
  sort?: string;
}) => {
  try {
    const response = await baseUrl.get('api/boards', {
      params: {page, size, issue, sort},
    });
    if (response.status === 200) {
      const data = response.data;
      return {
        content: data.content,
        hasNextPage: data.content.length === size,
      };
    }
  } catch (error) {
    console.log('추천 레시피 가져오기', error);
    throw error;
  }
};

export const addLikeRecipe = async (boardId: number) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.patch(
      `api/boards/${boardId}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log(error.response.data);
    throw new Error(error);
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
  console.log('data', data);
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
    // 이미지가 있는 경우에만 추가
    if (instruction.imageFile.name) {
      formData.append(`descriptions[${index}].image`, instruction.imageFile);
    }
  });
  console.log('formData', formData);
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.post('api/board', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 추가 실패', error);
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
