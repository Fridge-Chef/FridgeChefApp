import {useInfiniteQuery, useMutation} from '@tanstack/react-query';
import {AddIngredientType} from '../type/types';
import {
  deleteMyRecipe,
  getMyRecipeReview,
  getRecipeBookItemList,
  updateMyRecipe,
} from './recipeBook';

export const useGetRecipeBookList = (
  itemType: string,
  size = 10,
  sort = 'LATEST',
) => {
  return useInfiniteQuery({
    queryKey: ['getRecipeBookList', itemType, sort],
    queryFn: ({pageParam = 0}) =>
      getRecipeBookItemList(itemType, pageParam, size, sort),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage?.page?.number ?? 0;
      const totalPages = lastPage?.page?.totalPages ?? 1;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
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
