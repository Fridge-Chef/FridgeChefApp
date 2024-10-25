import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PCloseButton from '../../components/Community/AddRecipe/Preview/PCloseButton';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors} from '../../../globalStyle';
import {getRecipeDetail} from '../../api/recipe';
import {AddIngredientType} from '../../type/types';
import FImage from '../../components/elements/FImage';
import PreviewTitle from '../../components/Community/AddRecipe/Preview/PreviewTitle';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import {useLoading} from '../../store/store';
import Loading from '../../components/elements/Loading';

type CRecipeReviews = {
  params: {
    itemId: number;
  };
};

const CRecipeReviewDetail = () => {
  const data = useRoute<RouteProp<CRecipeReviews>>();
  const [recipeData, setRecipeData] = useState<AddIngredientType>();
  const {itemId} = data.params;
  const getRecipeData = async () => {
    const data = await getRecipeDetail(itemId);
    setRecipeData(data.data);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  console.log('recipeData', recipeData);

  if (!recipeData) return null;

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <View>
        <FImage
          uri={recipeData.mainImage}
          imgStyle="detail"
          alt="미리보기 메인"
        />
      </View>
      <PreviewTitle
        title={recipeData.name}
        dishCategory={recipeData.dishCategory}
        dishTime={recipeData.dishTime}
        dishLevel={recipeData.dishLevel}
      />
      <RecipeNote content={recipeData.description} />
      <IngredientComponent recipeIngredients={recipeData.recipeIngredients} />
      <RecipeComponent instructions={recipeData.instructions} />
      <PCloseButton />
    </ScrollView>
  );
};

export default CRecipeReviewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
