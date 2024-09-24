import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles} from '../../../../globalStyle';
import ItemsComponent from './ItemsComponent';

type IngredientContainerProps = {
  title: string;
  detailList: {
    title: string;
  }[];
};

const IngredientContainer = ({title, detailList}: IngredientContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.R_14, {color: colors.subText}]}>{title}</Text>
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
    marginTop: FHeight * 16,
  },

  itemContainer: {
    marginTop: FHeight * 8,
  },

  itemSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FHeight * -8,
  },
});
