import {ReviewType} from '../../../type/types';

export const isValidReview = (userReview: ReviewType) => {
  if (
    !userReview.comment ||
    userReview.star === 0 ||
    userReview.comment.length < 10
  ) {
    console.log('데이터를 모두 입력해주세요');
    return false;
  }
  return true;
};
