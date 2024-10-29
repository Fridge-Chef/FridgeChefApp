import {useMutation} from '@tanstack/react-query';
import {addIngredients, Ingredients} from './ingredients';

export const useAddIngredients = () => {
  const mutationFn = ({ingredients}: Ingredients) =>
    addIngredients({ingredients});

  return useMutation({
    mutationKey: ['addIngredients'],
    mutationFn,
  });
};
