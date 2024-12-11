import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useRecipeReviewTitle,
  useUserDetail,
  useUsernameCheck,
} from '../../../store/store';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import FAppBar from '../../elements/FAppBar';

const MyRecipeDetailAppBar = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {userDetail} = useUserDetail();

  return (
    <FAppBar
      borderBottomWidth={0}
      type="headerClose"
      rightOn={true}
      // onlyBackIcon={true}
      // rType1="menuIcon"
      rType2={userDetail.myMe ? 'detailReviewMore' : null!}
      onPress2={() => {
        if (userDetail.myMe) {
          setTitle('나의레시피디테일');
          bottomSheetRef.current?.present();
        }
      }}
    />
  );
};

export default MyRecipeDetailAppBar;

const styles = StyleSheet.create({});
