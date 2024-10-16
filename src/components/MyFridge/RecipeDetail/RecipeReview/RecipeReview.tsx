import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import TitleComponent from './TitleComponent';
import ReviewsComponent from './ReviewsComponent';

type RecipeReviewProps = {
  title: string;
};

const RecipeReview = ({title}: RecipeReviewProps) => {
  return (
    <View style={styles.container}>
      <TitleComponent title={title} />
      <ReviewsComponent title={title} />
    </View>
  );
};

export default RecipeReview;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 24,
    backgroundColor: colors.white,
  },
});
