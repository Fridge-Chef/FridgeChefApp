import {useMutation, useQuery} from '@tanstack/react-query';
import {deleteMyRecipe, getRecipeBookItemList} from './recipeBook';
import {RecipeBookListItemType} from '../type/types';

export const useGetRecipeBookList = (itemType: string) => {
  const queryFn = () => getRecipeBookItemList(itemType);
  return useQuery<RecipeBookListItemType>({
    queryKey: ['getRecipeBookList', itemType],
    queryFn,
  });
};

export const useDeleteMyRecipe = () => {
  const mutationFn = (id: number) => deleteMyRecipe(id);
  return useMutation({
    mutationKey: ['deleteMyRecipe'],
    mutationFn,
  });
};
