import {StyleSheet, View} from 'react-native';
import React from 'react';
import RecipeSubTitle from '../RecipeSubTitle';
import {FWidth} from '../../../../../globalStyle';
import {AddIngredientPageType, AddIngredientType} from '../../../../type/types';
import FootTitle from './FootTitle';
import Category from './Category';
import RecipePreview from './RecipePreview';
import CookTime from './CookTime';
import CookLevel from './CookLevel';

type InputContentType = {
  selectedCategory: {
    foodStyle: string;
    foodType: string;
  };
};

const InputContent = ({
  addRecipeData,
  selectedCategory,
  setAddRecipeData,
}: AddIngredientPageType & InputContentType) => {
  return (
    <View>
      <View style={styles.container}>
        <RecipeSubTitle title="요리명" required={true} />
        <FootTitle
          value={addRecipeData?.name}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, name: text});
          }}
        />
        <RecipeSubTitle title="카테고리" />
        <Category selectedCategory={selectedCategory} />
        <RecipeSubTitle title="레시피 소개" />
        <RecipePreview
          value={addRecipeData?.description}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, description: text});
          }}
        />
        <RecipeSubTitle title="조리 시간" />
        <CookTime
          value={addRecipeData.dishTime}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, dishTime: text});
          }}
        />
        <RecipeSubTitle title="조리 난이도" />
      </View>
      <View style={styles.levelContainer}>
        <CookLevel
          onPress={text => {
            setAddRecipeData({...addRecipeData, dishLevel: text});
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
