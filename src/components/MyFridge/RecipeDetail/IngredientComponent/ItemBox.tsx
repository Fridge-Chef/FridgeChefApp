import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';

type ItemBoxProps = {
  title: string;
  onPress?: () => void;
};

const ItemBox = ({title, onPress}: ItemBoxProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="R_16" color={colors.black} text={title} />
      <FButton buttonStyle="buyButton" onPress={onPress}>
        <FText fStyle="M_14" color={colors.black} text="구매" />
      </FButton>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
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