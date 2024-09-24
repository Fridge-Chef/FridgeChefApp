import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';

type ItemBoxProps = {
  title: string;
};

const ItemBox = ({title}: ItemBoxProps) => {
  return (
    <View style={styles.itemBox}>
      <Text style={[fontStyles.R_12, styles.textColor]}>{title}</Text>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
  },

  itemBox: {
    marginTop: FHeight * 8,
    marginRight: FWidth * 8,
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 6,
    borderRadius: 50,
    backgroundColor: colors.background,
  },
});
