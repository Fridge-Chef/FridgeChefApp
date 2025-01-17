import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';

type AddRecipeSubButtonProps = {
  onPress: () => void;
  title: string;
};

const AddRecipeSubButton = ({onPress, title}: AddRecipeSubButtonProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View style={styles.container}>
        <FText fStyle="R_16" color={colors.text} text={title} />
      </View>
    </FButton>
  );
};

export default AddRecipeSubButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 10,
    paddingLeft: FWidth * 12,
    borderRadius: 8,
    backgroundColor: colors.b100,
  },
});
