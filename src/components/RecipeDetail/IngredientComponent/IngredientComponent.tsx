import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import ItemsComponent from './ItemsComponent';
import {detailList3} from '../../../utils/list';
import SubTitleComponent from '../SubTitleComponent';

const IngredientComponent = () => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title="재료" />
      <View style={styles.itemsContainer}>
        <View style={styles.subContainer}>
          <ItemsComponent ingredientList={detailList3} />
        </View>
      </View>
    </View>
  );
};

export default IngredientComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 12,
    paddingHorizontal: FWidth * 22,
    paddingVertical: FHeight * 24,
    backgroundColor: colors.white,
  },

  itemsContainer: {
    marginTop: FHeight * 16,
  },
  subContainer: {
    marginTop: FHeight * -8,
  },
});
