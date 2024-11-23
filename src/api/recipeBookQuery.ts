import {useQuery} from '@tanstack/react-query';
import {getLikedRecipeList} from './recipeBook';

export const useGetRecipeBookLikeList = () => {
  return useQuery({
    queryKey: ['getLikedRecipeList'],
    queryFn: getLikedRecipeList,
  });
};
