import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../globalStyle';
import TopComponent from '../../components/MyFridge/RecRecipe/TopComponent';
import Recipes from '../../components/MyFridge/RecRecipe/ListItem/Recipes';
const RecRecipe = () => {
  return (
    <View style={styles.container}>
      <TopComponent />
      <Recipes />
    </View>
  );
};

export default RecRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FHeight * 24,
    paddingBottom: FHeight * 26,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
