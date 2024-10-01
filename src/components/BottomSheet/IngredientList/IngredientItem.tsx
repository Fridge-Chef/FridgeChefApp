import {ColorValue, DimensionValue, StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../elements/FText';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import Close2 from '../../../utils/Svg/Close2';

type IngredientItemProps = {
  ingredients: string;
  tColor: ColorValue;
  iColor: ColorValue;
  backColor: ColorValue;
  bWidth: number;
  pVer?: DimensionValue;
  pHor?: DimensionValue;
  onPress?: () => void;
  deleteOnPress?: () => void;
};

const IngredientItem = ({
  ingredients,
  tColor,
  iColor,
  backColor,
  bWidth,
  pVer = FWidth * 9,
  pHor = FWidth * 12,
  onPress,
  deleteOnPress,
}: IngredientItemProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: backColor,
            borderWidth: bWidth,
            paddingVertical: pVer,
            paddingHorizontal: pHor,
          },
        ]}>
        <FText
          mRight={FWidth * 4}
          fStyle="M_16"
          color={tColor}
          text={ingredients}
        />
        <FButton
          buttonStyle="noneStyle"
          onPress={deleteOnPress}
          hitSlop={{top: 12, bottom: 15, right: 10}}>
          <Close2 iconColor={iColor} />
        </FButton>
      </View>
    </FButton>
  );
};

export default IngredientItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: colors.disabled,
    marginRight: FWidth * 8,
    marginBottom: FWidth * 16,
  },
});