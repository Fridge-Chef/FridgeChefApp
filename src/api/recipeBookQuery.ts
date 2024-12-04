import {useInfiniteQuery, useMutation, useQuery} from '@tanstack/react-query';
import {
  deleteMyRecipe,
  getMyRecipeReview,
  getRecipeBookItemList,
  updateMyRecipe,
} from './recipeBook';
import {AddIngredientType, RecipeBookListItemType} from '../type/types';

export const useGetRecipeBookList = (itemType: string) => {
  const queryFn = () => getRecipeBookItemList(itemType);
  return useQuery<RecipeBookListItemType>({
    queryKey: ['getRecipeBookList', itemType],
    queryFn,
  });
};

export const useUpdateMyRecipe = () => {
  const mutationFn = (updateData: AddIngredientType) =>
    updateMyRecipe(updateData);
  return useMutation({
    mutationKey: ['updateMyRecipe'],
    mutationFn,
  });
};

export const useDeleteMyRecipe = () => {
  const mutationFn = (id: number) => deleteMyRecipe(id);
  return useMutation({
    mutationKey: ['deleteMyRecipe'],
    mutationFn,
  });
};

export const useMyRecipeReviews = (size = 10, sort = 'LATEST') => {
  return useInfiniteQuery({
    queryKey: ['myRecipeReviews', sort],
    queryFn: ({pageParam = 0}) => getMyRecipeReview(pageParam, size, sort),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage?.page?.number ?? 0;
      const totalPages = lastPage?.page?.totalPages ?? 1;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};
