import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import RecipeSubTitle from '../RecipeSubTitle';

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
