import React from 'react';
import {StyleSheet} from 'react-native';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {useRecipeReviewTitle, useUserReview} from '../../../store/store';
import FAppBar from '../../elements/FAppBar';

const ReviewDetailAppBar = () => {
  const {setTitle} = useBottomSheetTitle();
  const {userReview} = useUserReview();
  const {bottomSheetRef} = useBottomSheetRef();
  const {reviewTitle} = useRecipeReviewTitle();
  console.log('userReview', userReview.myMe);
  return (
    <FAppBar
      borderBottomWidth={0}
      type="headerClose"
      titleOn={true}
      title={reviewTitle}
      rightOn={true}
      onlyBackIcon={userReview.myMe ? false : true}
      // rType1="menuIcon"
      rType2={userReview.myMe ? 'detailReviewMore' : 'headerClose'}
      onPress2={
        userReview.myMe
          ? () => {
              setTitle('디테일리뷰옵션');
              bottomSheetRef.current?.present();
            }
          : undefined
      }
    />
  );
};

export default ReviewDetailAppBar;

const styles = StyleSheet.create({});
