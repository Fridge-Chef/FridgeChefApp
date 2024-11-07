import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import FImage from '../../components/elements/FImage';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AddIngredientType} from '../../type/types';
import PreviewTitle from '../../components/Community/AddRecipe/Preview/PreviewTitle';
import {colors} from '../../../globalStyle';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import PCloseButton from '../../components/Community/AddRecipe/Preview/PCloseButton';

type AddRecipePreviewProps = {
  params: {
    recipeData: AddIngredientType;
  };
};

const AddRecipePreview = () => {
  const route = useRoute<RouteProp<AddRecipePreviewProps>>();
  const item = route.params.recipeData;

  return (
    <ScrollView style={styles.container}>
      <View>
        <FImage uri={item.mainImage} imgStyle="detail" alt="미리보기 메인" />
      </View>
      <PreviewTitle
        title={item.name}
        dishCategory={item.dishCategory}
        dishTime={item.dishTime}
        dishLevel={item.dishLevel}
      />
      <RecipeNote content={item.description} />
      <IngredientComponent recipeIngredients={item.recipeIngredients} />
      <RecipeComponent instructions={item.instructions} />
      <PCloseButton />
    </ScrollView>
  );
};

export default AddRecipePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
