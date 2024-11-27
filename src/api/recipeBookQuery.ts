import {useMutation, useQuery} from '@tanstack/react-query';
import {
  deleteMyRecipe,
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
