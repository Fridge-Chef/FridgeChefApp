import {StyleSheet, View} from 'react-native';
import React from 'react';
import RecipeSubTitle from '../RecipeSubTitle';
import {FWidth} from '../../../../../globalStyle';
import {AddIngredientType} from '../../../../type/types';
import FootTitle from './FootTitle';
import Category from './Category';
import RecipePreview from './RecipePreview';
import CookTime from './CookTime';
import CookLevel from './CookLevel';

const InputContent = ({
  addRecipeData,
  selectedCategory,
  setAddRecipeData,
}: AddIngredientType) => {
  return (
    <View>
      <View style={styles.container}>
        <RecipeSubTitle title="요리명" required={true} />
        <FootTitle
          value={addRecipeData?.mainTitle}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, mainTitle: text});
          }}
        />
        <RecipeSubTitle title="카테고리" />
        <Category selectedCategory={selectedCategory} />
        <RecipeSubTitle title="레시피 소개" />
        <RecipePreview
          value={addRecipeData?.mainContent}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, mainContent: text});
          }}
        />
        <RecipeSubTitle title="조리 시간" />
        <CookTime
          value={addRecipeData.cookTime}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, cookTime: text});
          }}
        />
        <RecipeSubTitle title="조리 난이도" />
      </View>
      <View style={styles.levelContainer}>
        <CookLevel
          onPress={text => {
            setAddRecipeData({...addRecipeData, cookLevel: text});
          }}
        />
      </View>
    </View>
  );
};

export default InputContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: FWidth * 22,
  },

  levelContainer: {
    paddingHorizontal: FWidth * 18,
    marginBottom: FWidth * 32,
  },
});
