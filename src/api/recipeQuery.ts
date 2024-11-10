import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addMyRecipe,
  AddRecipeReview,
  getMyFridgeList,
  getRecipeDetail,
  getRecipeDetailReview,
  getRecipeList,
  getRecommendedRecipeList,
} from './recipe';
import {
  AddIngredientType,
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

export const useAddRecipe = () => {
  const mutationFn = (recipeData: AddIngredientType) => addMyRecipe(recipeData);
  return useMutation({
    mutationKey: ['addRecipe'],
    mutationFn,
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
