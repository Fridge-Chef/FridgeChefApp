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
      <Text style={[fontStyles.M_16, styles.textColor2]}>{title}</Text>
      <FButton buttonStyle="buyButton" onPress={onPress}>
        <Text style={[fontStyles.M_14, styles.textColor]}>구매</Text>
      </FButton>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
  },
  textColor2: {
    color: colors.black,
  },

  container: {
    marginTop: FHeight * 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buyButton: {
    paddingHorizontal: FWidth * 19.5,
    paddingVertical: FWidth * 8,
    borderColor: colors.border,
    borderRadius: 40,
    borderWidth: 1,
  },
});
