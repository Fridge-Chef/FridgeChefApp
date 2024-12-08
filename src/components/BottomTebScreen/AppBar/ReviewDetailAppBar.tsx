import {StyleSheet} from 'react-native';
import React from 'react';
import FAppBar from '../../elements/FAppBar';
import {useRecipeReviewTitle} from '../../../store/store';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';

const ReviewDetailAppBar = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {reviewTitle} = useRecipeReviewTitle();
  return (
    <FAppBar
      borderBottomWidth={0}
      type="headerClose"
      titleOn={true}
      title={reviewTitle}
      rightOn={true}
      // onlyBackIcon={true}
      // rType1="menuIcon"
      rType2="detailReviewMore"
      onPress2={() => {
        setTitle('디테일리뷰옵션');
        bottomSheetRef.current?.present();
      }}
    />
  );
};

export default ReviewDetailAppBar;

const styles = StyleSheet.create({});
