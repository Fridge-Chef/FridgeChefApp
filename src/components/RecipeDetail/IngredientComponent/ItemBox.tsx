import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';

type ItemBoxProps = {
  title: string;
  onPress?: () => void;
};

const ItemBox = ({title, onPress}: ItemBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.M_16, styles.textColor2]}>{title}</Text>
      </View>
      <FButton buttonStyle="buyButton" onPress={onPress}>
        <View style={styles.textLine2}>
          <Text style={[fontStyles.M_14, styles.textColor]}>구매</Text>
        </View>
      </FButton>
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
  textColor2: {
    color: colors.black,
    includeFontPadding: false,
    alignItems: 'center',
  },

  container: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textLine: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  textLine2: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  buyButton: {
    paddingHorizontal: FWidth * 19.5,
    paddingVertical: FWidth * 8,
    borderColor: colors.border,
    borderRadius: 40,
    borderWidth: 1,
  },
});
