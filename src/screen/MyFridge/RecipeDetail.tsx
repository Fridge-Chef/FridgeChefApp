import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/RecipeDetail/RecipeReview/RecipeReview';
import FImage from '../../components/elements/FImage';
import FText from '../../components/elements/FText';
import Badge from '../../components/RecipeDetail/Badge';
import RecipeNote from '../../components/RecipeDetail/RecipeNote/RecipeNote';

type DetailItem = {
  params: {
    title: string;
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <View style={{position: 'relative'}}>
        <FImage imgStyle="detail" uri="" resizeMode="stretch" alt="디테일" />
        <Badge />
      </View>
      <TitleComponent title={route.params.title} />
      <RecipeNote />
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
