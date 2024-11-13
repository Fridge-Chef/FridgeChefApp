import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddRecipeReviewType} from '../type/types';

export const recipeDetailReviewDelete = async (
  boardId: number,
  commentId: number,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.delete(
      `/api/boards/${boardId}/comments/${commentId}`,
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
    console.log('레시피 후기 삭제 실패', error.response.data);
    throw new Error(error);
  }
};

export const recipeDetailReviewUpdate = async (
  boardId: number,
  commentId: number,
  review: AddRecipeReviewType,
) => {
  try {
    const formData = new FormData();
    formData.append('comment', review.comment);
    formData.append('star', review.star);
    if (review.imagesFile!.length > 0) {
      formData.append('isImage', true);
      review.imagesFile!.forEach(image => {
        formData.append(`images`, image);
      });
    } else {
      formData.append('isImage', false);
    }
    console.log(formData);
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.put(
      `api/boards/${boardId}/comments/${commentId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 후기 수정 실패', error.response.data);
    throw new Error(error);
  }
};
