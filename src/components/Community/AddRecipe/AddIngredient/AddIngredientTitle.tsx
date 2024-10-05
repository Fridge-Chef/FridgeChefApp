import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipeSubTitle from '../RecipeSubTitle';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';

const AddIngredientTitle = () => {
  return (
    <>
      <RecipeSubTitle title="재료 입력" required />
      <FText
        mTop={FWidth * 4}
        fStyle="R_14"
        color={colors.subText}
        text="최소 2개 이상 입력해주세요"
      />
    </>
  );
};

export default AddIngredientTitle;

const styles = StyleSheet.create({});
