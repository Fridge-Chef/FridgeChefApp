import {StyleSheet} from 'react-native';
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
    <FButton
      buttonStyle="submit"
      title={title}
      style={fontStyles.B_20}
      buttonColor={buttonColor}
      titleColor={colors.white}
      onPress={onPress}
    />
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
