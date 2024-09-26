import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';

import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/RecipeDetail/RecipeReview/RecipeReview';
import ImageComponent from '../../components/elements/ImageComponent';

type DetailItem = {
  params: {
    title: string;
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <ImageComponent
        imgStyle="detail"
        uri=""
        resizeMode="stretch"
        alt="디테일"
      />
      <TitleComponent title={route.params.title} />
      <IngredientComponent />
      <RecipeComponent />
      <RecipeReview />
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
