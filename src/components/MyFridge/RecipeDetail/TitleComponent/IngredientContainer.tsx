import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import ItemsComponent from './ItemsComponent';

type IngredientContainerProps = {
  title: string;
  detailList: string[];
};

const IngredientContainer = ({title, detailList}: IngredientContainerProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_14" color={colors.subText} text={title} />
      <View style={styles.itemContainer}>
        <View style={styles.itemSubContainer}>
          <ItemsComponent list={detailList} />
        </View>
      </View>
    </View>
  );
};

export default IngredientContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
  },

  itemContainer: {
    marginTop: FWidth * 8,
  },

  itemSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FWidth * -8,
  },
});
