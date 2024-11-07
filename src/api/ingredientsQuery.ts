import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addIngredientCategory,
  addIngredients,
  addIngredients2,
  deleteIngredients,
  getIngredients,
  IngredientCategory,
  Ingredients,
  IngredientsType,
} from './ingredients';

export const useAddIngredients = () => {
  const mutationFn = ({ingredients}: Ingredients) =>
    addIngredients({ingredients});

  return useMutation({
    mutationKey: ['addIngredients'],
    mutationFn,
  });
};

export const useAddIngredients2 = () => {
  const mutationFn = ({itemList}: IngredientsType) =>
    addIngredients2({itemList});

  return useMutation({
    mutationKey: ['addIngredients2'],
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
