import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {AddIngredientPageType} from '../../../../type/types';
import ImageComponent from './ImageComponent';
import InputContent from './InputContent';

type MainTopType = {
  selectedCategory: string;
};

const MainTop = ({
  addRecipeData,
  selectedCategory,
  setAddRecipeData,
}: AddIngredientPageType & MainTopType) => {
  return (
    <View style={styles.container}>
      <ImageComponent
        addRecipeData={addRecipeData}
        setAddRecipeData={setAddRecipeData}
      />
      <InputContent
        addRecipeData={addRecipeData}
        setAddRecipeData={setAddRecipeData}
        selectedCategory={selectedCategory}
      />
    </View>
  );
};

export default MainTop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: FWidth * 16,
    paddingBottom: FWidth * 32,
  },
});
