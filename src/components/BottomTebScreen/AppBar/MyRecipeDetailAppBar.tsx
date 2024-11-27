import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRecipeReviewTitle, useUsernameCheck} from '../../../store/store';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import FAppBar from '../../elements/FAppBar';
import {useGetUser} from '../../../api/userQuery';

const MyRecipeDetailAppBar = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {reviewTitle} = useRecipeReviewTitle();
  const [userChecked, setUserChecked] = useState(false);
  const {data} = useGetUser();
  const {usernameCheck} = useUsernameCheck();
  useEffect(() => {
    if (data && usernameCheck) {
      setUserChecked(data?.user.username === usernameCheck);
    } else {
      setUserChecked(false);
    }
  }, [data, usernameCheck]);
  return (
    <FAppBar
      borderBottomWidth={0}
      type="headerClose"
      titleOn={true}
      title={reviewTitle}
      rightOn={true}
      // onlyBackIcon={true}
      // rType1="menuIcon"
      rType2={userChecked ? 'detailReviewMore' : null!}
      onPress2={() => {
        if (userChecked) {
          setTitle('나의레시피디테일');
          bottomSheetRef.current?.present();
        }
      }}
    />
  );
};

export default MyRecipeDetailAppBar;

const styles = StyleSheet.create({});
