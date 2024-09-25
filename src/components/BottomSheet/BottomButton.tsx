import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {colors, fontStyles} from '../../../globalStyle';

type BottomButtonProps = {
  title: string;
  buttonColor: string;
  onPress: () => void;
};

const BottomButton = ({title, buttonColor, onPress}: BottomButtonProps) => {
  return (
    <FButton buttonStyle="submit" buttonColor={buttonColor} onPress={onPress}>
      <Text style={[fontStyles.B_20, styles.textColor]}>{title}</Text>
    </FButton>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  textColor: {
    color: colors.white,
  },
});
