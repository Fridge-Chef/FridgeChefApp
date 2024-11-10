import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import TitleComponent from './TitleComponent';
import ReviewsComponent from './ReviewsComponent';

type RecipeReviewProps = {
  boardId: number;
  title: string;
};

const RecipeReview = ({title, boardId}: RecipeReviewProps) => {
  return (
    <View style={styles.container}>
      <TitleComponent title={title} boardId={boardId} />
      <ReviewsComponent title={title} boardId={boardId} />
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
