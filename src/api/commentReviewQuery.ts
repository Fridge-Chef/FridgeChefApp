import {useMutation} from '@tanstack/react-query';
import {
  RecipeDetailReviewUpdateType,
  RecipeReviewLikeType,
} from '../type/types';
import {
  recipeDetailReviewDelete,
  recipeDetailReviewUpdate,
} from './commentReview';

export const useDeleteDetailReview = () => {
  const mutationFn = (deleteData: RecipeReviewLikeType) =>
    recipeDetailReviewDelete(deleteData.boardId, deleteData.commentId);
  return useMutation({
    mutationKey: ['deleteDetailReview'],
    mutationFn,
  });
};

export const useUpdateDetailReview = () => {
  const mutationFn = (updateData: RecipeDetailReviewUpdateType) =>
    recipeDetailReviewUpdate(
      updateData.boardId,
      updateData.commentId,
      updateData.review,
    );
  return useMutation({
    mutationKey: ['updateDetailReview'],
    mutationFn,
  });
};
