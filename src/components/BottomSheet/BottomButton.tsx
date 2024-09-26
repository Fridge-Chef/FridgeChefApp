import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type BottomButtonProps = {
  title: string;
  buttonColor: string;
  onPress: () => void;
};

const BottomButton = ({title, buttonColor, onPress}: BottomButtonProps) => {
  return (
    <FButton buttonStyle="submit" buttonColor={buttonColor} onPress={onPress}>
      <FText fStyle="B_20" color={colors.white} text={title} />
    </FButton>
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
