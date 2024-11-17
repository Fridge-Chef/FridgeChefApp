import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from './axios';
import {AddRecipeReviewType, RecipeReviewLikeType} from '../type/types';

export const AddRecipeReview = async (
  boardId: number,
  data: AddRecipeReviewType,
) => {
  const formData = new FormData();
  formData.append('comment', data.comment);
  formData.append('star', data.star);
  data.imagesFile?.forEach(image => {
    formData.append(`images`, image);
  });
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.post(`api/boards/${boardId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 후기 작성 실패', error);
    throw new Error(error.response.data);
  }
};

export const getRecipeDetailReviewList = async (boardId: number) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get(`api/boards/${boardId}/comments`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 디테일 리뷰 리스트 가져오기 실패', error);
  }
};

export const likeRecipeReview = async (likeData: RecipeReviewLikeType) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.patch(
      `api/boards/${likeData.boardId}/comments/${likeData.commentId}/like`,
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

export const recipeReviewDetail = async (
  boardId: number | undefined,
  commentId: number | undefined,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await baseUrl.get(
      `api/boards/${boardId}/comments/${commentId}`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      },
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log('레시피 후기 상세정보 가져오기', error.response.data);
  }
};

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
    const isImageChanged =
      review.prevImages?.length !== review.images?.length ||
      review.prevImages?.some((img, index) => img !== review.images?.[index]);
    if (isImageChanged) {
      formData.append('isImage', true);
      review.imagesFile?.forEach(image => {
        formData.append('images', image);
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
