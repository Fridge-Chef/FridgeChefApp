import {useQuery} from '@tanstack/react-query';
import {getLikedRecipeList, getMyRecipeList} from './recipeBook';
import {RecipeBookListItemType} from '../type/types';

export const useGetRecipeBookLikeList = () => {
  return useQuery<RecipeBookListItemType>({
    queryKey: ['getLikedRecipeList'],
    queryFn: getLikedRecipeList,
  });
};

export const useGetRecipeMyRecipeList = () => {
  return useQuery<RecipeBookListItemType>({
    queryKey: ['getMyRecipeList'],
    queryFn: getMyRecipeList,
  });
};
