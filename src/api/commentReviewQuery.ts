import {useMutation, useQuery} from '@tanstack/react-query';
import {
  RecipeDetailReviewUpdateType,
  recipeReviewDataType,
  RecipeReviewDetailType,
  RecipeReviewLikeType,
  RecipeReviewListType,
} from '../type/types';
import {
  AddRecipeReview,
  getRecipeDetailReviewList,
  likeRecipeReview,
  recipeDetailReviewDelete,
  recipeDetailReviewUpdate,
  recipeReviewDetail,
} from './commentReview';

export const useAddRecipeReview = () => {
  const mutationFn = (recipeReviewData: recipeReviewDataType) =>
    AddRecipeReview(recipeReviewData.boardId, recipeReviewData.reviewData);
  return useMutation({
    mutationKey: ['addRecipeReview'],
    mutationFn,
  });
};

export const useGetRecipeDetailReviewList = (id: number) => {
  const queryFn = () => getRecipeDetailReviewList(id);
  return useQuery<RecipeReviewListType>({
    queryKey: ['recipeDetailReviewList'],
    queryFn,
    select: data => data || [],
  });
};

export const useGetRecipeReviewDetail = (
  boardId: number | undefined,
  commentId: number | undefined,
) => {
  const queryFn = () => recipeReviewDetail(boardId, commentId);
  return useQuery<RecipeReviewDetailType>({
    queryKey: ['recipeReviewDetail', `${boardId}-${commentId}`],
    queryFn,
  });
};

export const useLikeRecipeReview = () => {
  const mutationFn = (likeData: RecipeReviewLikeType) =>
    likeRecipeReview(likeData);
  return useMutation({
    mutationKey: ['likeRecipeReview'],
    mutationFn,
  });
};

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
