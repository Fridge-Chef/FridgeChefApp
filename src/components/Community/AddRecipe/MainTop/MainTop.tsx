import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ImageComponent from './ImageComponent';
import InputContent from './InputContent';
import {AddIngredientType} from '../../../../type/types';

const MainTop = ({
  addRecipeData,
  selectedCategory,
  setAddRecipeData,
}: AddIngredientType) => {
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
