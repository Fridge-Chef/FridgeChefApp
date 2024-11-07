import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../globalStyle';
import TopComponent from '../../components/MyFridge/RecRecipe/TopComponent';
import Recipes from '../../components/MyFridge/RecRecipe/ListItem/Recipes';
import {useIngredientList} from '../../store/store';

const RecRecipe = () => {
  const {ingredientList} = useIngredientList();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopComponent ingredients={ingredientList} />
      <Recipes />
    </ScrollView>
  );
};

export default RecRecipe;

const styles = StyleSheet.create({
  container: {
    paddingTop: FHeight * 24,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
