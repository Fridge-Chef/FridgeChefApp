import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type LoginButtonTitleProps = {
  title: string;
};

const LoginButtonTitle = ({title}: LoginButtonTitleProps) => {
  return (
    <FText mLeft={FWidth * 6} fStyle="B_16" color={colors.text} text={title} />
  );
};

export default LoginButtonTitle;

const styles = StyleSheet.create({});
