import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {fontFamilies} from '../../../globalStyle';

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
      fontFamily={fontFamilies.pretendardBold}
      fontSize={20}
      buttonColor={buttonColor}
      titleColor="white"
      onPress={onPress}
    />
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
