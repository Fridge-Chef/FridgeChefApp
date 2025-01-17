import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import Recipes from '../../components/MyFridge/RecRecipe/ListItem/Recipes';
import TopComponent from '../../components/MyFridge/RecRecipe/TopComponent';
import {useIngredientList} from '../../store/store';

const RecRecipe = () => {
  const {ingredientList} = useIngredientList();

  return (
    <View style={styles.container}>
      <TopComponent ingredients={ingredientList} />
      <Recipes ingredientList={ingredientList} />
    </View>
  );
};

export default RecRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: FHeight * 24,
    // paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
