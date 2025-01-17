import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import FText from '../FText';

type SubTitleProps = {
  title: string;
};

const SubTitle = ({title}: SubTitleProps) => {
  return <FText fStyle="B_14" color={colors.text} text={title} />;
};

export default SubTitle;

const styles = StyleSheet.create({});
