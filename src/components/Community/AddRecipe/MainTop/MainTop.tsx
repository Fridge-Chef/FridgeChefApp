import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ImageComponent from './ImageComponent';
import InputContent from './InputContent';
import {AddIngredientPageType, AddIngredientType} from '../../../../type/types';

type MainTopType = {
  selectedCategory: {
    foodStyle: string;
    foodType: string;
  };
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
