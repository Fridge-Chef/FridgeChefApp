import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddIngredientType} from '../type/types';

export const getRecipeBookItemList = async (
  listType: string,
  page: number,
  size: number,
  sort: string,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get(`api/books/recipe?book=${listType}`, {
      params: {
        page,
        size,
        sort,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피북 리스트 에러', error.response.data);
  }
};

export const updateMyRecipe = async (updateData: AddIngredientType) => {
  const formData = new FormData();
  formData.append('id', updateData.id);
  formData.append('title', updateData.name);
  formData.append('description', updateData.description);
  if (updateData.mainImage !== updateData.mainImagePreview) {
    formData.append('mainImageChange', true);
    formData.append('mainImage', updateData.mainImageFile);
  } else {
    formData.append('mainImageChange', false);
  }
  // formData.append('mainImageId', updateData.mainImageId);
  formData.append('dishTime', `${updateData.dishTime}분`);
  formData.append('dishLevel', updateData.dishLevel);
  formData.append('dishCategory', updateData.dishCategory);
  updateData.recipeIngredients.forEach((ingredient, index) => {
    formData.append(`recipeIngredients[${index}].name`, ingredient.name);
    formData.append(`recipeIngredients[${index}].details`, ingredient.details);
  });
  updateData.instructions.forEach((instruction, index) => {
    formData.append(`instructions[${index}].content`, instruction.content);
    if (instruction.imageLink !== instruction.imagePreview) {
      formData.append('instructions.imageChange', true);
      if (instruction.imageFile.name) {
        formData.append(`instructions[${index}].image`, instruction.imageFile);
      }
    } else {
      formData.append('instructions.imageChange', false);
    }
  });

  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.put('api/board', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error('update error');
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

export const getMyRecipeReview = async (
  page: number,
  size: number,
  sort: string,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get('api/books/comment', {
      params: {
        page,
        size,
        sort,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('나의 후기 에러', error.response.data);
  }
};
