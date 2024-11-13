import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addMyRecipe,
  getMyFridgeList,
  getRecipeDetail,
  getRecipeList,
  getRecommendedRecipeList,
} from './recipe';
import {
  AddIngredientType,
  GetRecipeListType,
  RecipeListType,
  RecipeReviewDetailType,
  RecipeReviewLikeType,
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

export const useGetRecommendedRecipeList = (ingredients: string[]) => {
  const ingredientsQuery = ingredients
    .map(ingredient => `ingredients=${ingredient}`)
    .join('&');
  const queryFn = () => getRecommendedRecipeList(ingredientsQuery);
  return useQuery<{content: GetRecipeListType[]}>({
    queryKey: ['recommendedRecipeList'],
    queryFn,
  });
};
