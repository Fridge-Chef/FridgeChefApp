import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addIngredientCategory,
  addIngredients,
  deleteIngredients,
  getIngredients,
  IngredientCategory,
  Ingredients,
} from './ingredients';

export const useAddIngredients = () => {
  const mutationFn = ({ingredients}: Ingredients) =>
    addIngredients({ingredients});

  return useMutation({
    mutationKey: ['addIngredients'],
    mutationFn,
  });
};

export const useGetIngredients = () => {
  const queryFn = () => getIngredients();
  return useQuery({
    queryKey: ['getIngredients'],
    queryFn,
  });
};

export const useDeleteIngredients = () => {
  const mutationFn = (title: string) => deleteIngredients(title);
  return useMutation({
    mutationKey: ['deleteIngredients'],
    mutationFn,
  });
};

export const useIngredientsCategory = () => {
  const mutationFn = (data: IngredientCategory) => addIngredientCategory(data);
  return useMutation({
    mutationKey: ['addIngredientCategory'],
    mutationFn,
  });
};
