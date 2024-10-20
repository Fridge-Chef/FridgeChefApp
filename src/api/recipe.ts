import {baseUrl} from './axios';

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
