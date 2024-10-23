import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import PCloseButton from '../../components/Community/AddRecipe/Preview/PCloseButton';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors} from '../../../globalStyle';
import {getRecipeDetail} from '../../api/recipe';

type CRecipeReviews = {
  params: {
    boardId: number;
  };
};

const CRecipeReviewDetail = () => {
  const data = useRoute<RouteProp<CRecipeReviews>>();
  console.log('dd', data.params.boardId);
  const getRecipeData = async () => {
    const data = await getRecipeDetail(data.params.boardId);
    console.log('data', data);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      {/* <View>
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
      <RecipeComponent instructions={item.instructions} /> */}
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
