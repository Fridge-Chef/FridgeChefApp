import {useQuery} from '@tanstack/react-query';
import {
  getMyFridgeList,
  getRecipeDetail,
  getRecipeList,
  getRecommendedRecipeList,
} from './recipe';
import {
  AddIngredientType,
  GetRecipeListType,
  RecipeListType,
} from '../type/types';

export const useGetRecipeList = () => {
  const queryFn = () => getRecipeList();
  return useQuery({
    queryKey: ['recipeList'],
    queryFn,
  });
};

export const useGetMyFridgeList = () => {
  const queryFn = () => getMyFridgeList('');
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

export const useGetRecommendedRecipeList = ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  const queryFn = () => getRecommendedRecipeList({page, size});
  return useQuery<GetRecipeListType>({
    queryKey: ['recommendedRecipeList'],
    queryFn,
  });
};