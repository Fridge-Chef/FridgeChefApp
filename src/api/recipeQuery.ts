import {useMutation, useQuery} from '@tanstack/react-query';
import {
  AddRecipeReview,
  getMyFridgeList,
  getRecipeDetail,
  getRecipeDetailReview,
  getRecipeList,
  getRecommendedRecipeList,
} from './recipe';
import {
  GetRecipeListType,
  RecipeListType,
  recipeReviewDataType,
  RecipeReviewListType,
} from '../type/types';

export const useGetRecipeList = () => {
  const queryFn = () => getRecipeList();
  return useQuery({
    queryKey: ['recipeList'],
    queryFn,
  });
};

export const useGetMyFridgeList = () => {
  const queryFn = () => getMyFridgeList();
  return useQuery({
    queryKey: ['myFridgeList'],
    queryFn,
  });
};

export const useGetRecipeDetail = (id: number) => {
  const queryFn = () => getRecipeDetail(id);
  return useQuery<RecipeListType>({
    queryKey: ['recipeDetail', id],
    queryFn,
  });
};

export const useGetRecommendedRecipeList = (ingredientsQuery: string) => {
  const queryFn = () => getRecommendedRecipeList(ingredientsQuery);
  return useQuery<{content: GetRecipeListType[]}>({
    queryKey: ['recommendedRecipeList'],
    queryFn,
  });
};

export const useAddRecipeReview = () => {
  const mutationFn = (recipeReviewData: recipeReviewDataType) =>
    AddRecipeReview(recipeReviewData.boardId, recipeReviewData.reviewData);
  return useMutation({
    mutationKey: ['addRecipeReview'],
    mutationFn,
  });
};

export const useGetRecipeDetailReview = (id: number) => {
  const queryFn = () => getRecipeDetailReview(id);
  return useQuery<RecipeReviewListType>({
    queryKey: ['recipeDetailReviewList', id],
    queryFn,
    select: data => data || [],
  });
};
