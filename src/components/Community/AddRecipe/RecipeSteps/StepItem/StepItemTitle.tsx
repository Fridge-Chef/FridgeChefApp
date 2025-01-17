import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../../../../globalStyle';
import AddRecipeDeleteIcon from '../../../../../utils/Svg/AddRecipeDeleteIcon';
import FButton from '../../../../elements/FButton';
import FText from '../../../../elements/FText';

type StepItemTitleProps = {
  index: number;
  onPress: () => void;
};
const StepItemTitle = ({index, onPress}: StepItemTitleProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_14" color={colors.primary[1]} text={`STEP ${index}`} />
      <FButton
        buttonStyle="noneStyle"
        onPress={onPress}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <AddRecipeDeleteIcon />
      </FButton>
    </View>
  );
};

export default StepItemTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
