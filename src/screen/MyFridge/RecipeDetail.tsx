import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/MyFridge/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/MyFridge/RecipeDetail/RecipeReview/RecipeReview';
import FImage from '../../components/elements/FImage';
import FText from '../../components/elements/FText';
import Badge from '../../components/MyFridge/RecipeDetail/Badge';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';

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
