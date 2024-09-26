import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';

type ItemBoxProps = {
  title: string;
};

const ItemBox = ({title}: ItemBoxProps) => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.R_12, styles.textColor]}>{title}</Text>
      </View>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },

  itemBox: {
    marginTop: FWidth * 8,
    marginRight: FWidth * 8,
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 6,
    borderRadius: 50,
    backgroundColor: colors.background,
  },

  textLine: {
    height: FWidth * 18,
    justifyContent: 'center',
  },
});
