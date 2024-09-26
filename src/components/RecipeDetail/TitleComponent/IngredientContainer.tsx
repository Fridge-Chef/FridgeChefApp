import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
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
      <View style={styles.textLine}>
        <Text style={[fontStyles.R_14, styles.textColor]}>{title}</Text>
      </View>
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
    marginTop: FWidth * 16,
  },

  textLine: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.subText,
    includeFontPadding: false,
    alignItems: 'center',
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
