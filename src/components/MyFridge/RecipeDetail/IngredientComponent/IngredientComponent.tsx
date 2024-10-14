import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ItemsComponent from './ItemsComponent';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';

type IngredientComponentProps = {
  ingredientList: {
    name: string;
    quantity: string;
  }[];
};

const IngredientComponent = ({ingredientList}: IngredientComponentProps) => {
  return (
    <View style={styles.container}>
      <SubTitle2 title="재료" />
      <View style={styles.itemsContainer}>
        <View style={styles.subContainer}>
          <ItemsComponent ingredientList={ingredientList} />
        </View>
      </View>
    </View>
  );
};

export default IngredientComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    paddingVertical: FWidth * 24,
    backgroundColor: colors.white,
  },

  itemsContainer: {
    marginTop: FWidth * 16,
  },
  subContainer: {
    marginTop: FWidth * -8,
  },
});
