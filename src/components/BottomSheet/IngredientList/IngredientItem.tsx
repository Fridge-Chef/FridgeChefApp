import React from 'react';
import {ColorValue, DimensionValue, StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import Close2 from '../../../utils/Svg/Close2';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';

type IngredientItemProps = {
  ingredients: string;
  closeIcon: boolean;
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
  closeIcon,
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
          mRight={closeIcon ? FWidth * 4 : 0}
          fStyle="M_16"
          color={tColor}
          text={ingredients}
        />
        <FButton
          buttonStyle="noneStyle"
          onPress={deleteOnPress}
          hitSlop={{top: 12, bottom: 15, right: 10}}>
          {closeIcon && <Close2 iconColor={iColor} />}
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
    marginBottom: FWidth * 16,
  },
});
