import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import TitleComponent from './TitleComponent';
import ReviewsComponent from './ReviewsComponent';

const RecipeReview = () => {
  return (
    <View style={styles.container}>
      <TitleComponent />
      <ReviewsComponent />
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
