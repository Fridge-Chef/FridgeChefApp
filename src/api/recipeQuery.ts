import {useInfiniteQuery, useMutation, useQuery} from '@tanstack/react-query';
import {
  addLikeRecipe,
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
} from '../type/types';

export const useGetRecipeList = (size = 10, issue = 'ALL', sort = 'LATEST') => {
  return useInfiniteQuery({
    queryKey: ['recipeList', issue, sort],
    queryFn: ({pageParam = 0}) =>
      getRecipeList({page: pageParam, size, issue, sort}),
    getNextPageParam: (lastPage, allPages) => {
      // lastPage에 다음 페이지가 있는지 확인
      const nextPage = lastPage?.hasNextPage ? allPages.length : undefined;
      return nextPage;
    },
    initialPageParam: 0,
  });
};

export const useGetMyFridgeList = () => {
  const queryFn = () => getMyFridgeList();
  return useQuery({
    queryKey: ['myFridgeList'],
    queryFn,
  });
};

export const useAddLikeRecipe = () => {
  const mutationFn = (boardId: number) => addLikeRecipe(boardId);
  return useMutation({
    mutationKey: ['addLikeRecipe'],
    mutationFn,
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
    queryKey: ['recommendedRecipeList', ingredients],
    queryFn,
  });
};
