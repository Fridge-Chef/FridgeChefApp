import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type LoginButtonTitleProps = {
  title: string;
};

const LoginButtonTitle = ({title}: LoginButtonTitleProps) => {
  return (
    <FText mLeft={FWidth * 6} fStyle="B_18" color={colors.text} text={title} />
  );
};

export default LoginButtonTitle;

const styles = StyleSheet.create({});
