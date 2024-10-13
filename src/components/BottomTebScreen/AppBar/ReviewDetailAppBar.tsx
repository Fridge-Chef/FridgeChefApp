import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FAppBar from '../../elements/FAppBar';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../store/store';

const ReviewDetailAppBar = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  return (
    <FAppBar
      borderBottomWidth={0}
      type="headerClose"
      titleOn={true}
      title="레시피 후기"
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
