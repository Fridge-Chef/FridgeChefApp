import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRecipeReviewTitle} from '../../../store/store';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import FAppBar from '../../elements/FAppBar';

const MyRecipeDetailAppBar = () => {
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
        setTitle('나의레시피디테일');
        bottomSheetRef.current?.present();
      }}
    />
  );
};

export default MyRecipeDetailAppBar;

const styles = StyleSheet.create({});
