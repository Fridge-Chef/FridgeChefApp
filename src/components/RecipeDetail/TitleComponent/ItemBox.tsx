import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type ItemBoxProps = {
  title: string;
};

const ItemBox = ({title}: ItemBoxProps) => {
  return (
    <View style={styles.itemBox}>
      <FText fStyle="R_12" color={colors.text} text={title} />
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  itemBox: {
    marginTop: FWidth * 8,
    marginRight: FWidth * 8,
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 6,
    borderRadius: 50,
    backgroundColor: colors.background,
  },
});
