import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type BottomButtonProps = {
  title: string;
  buttonColor: string;
  onPress: () => void;
};

const BottomButton = ({title, buttonColor, onPress}: BottomButtonProps) => {
  return (
    <FButton buttonStyle="submit" buttonColor={buttonColor} onPress={onPress}>
      <FText fStyle="B_18" color={colors.white} text={title} />
    </FButton>
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
