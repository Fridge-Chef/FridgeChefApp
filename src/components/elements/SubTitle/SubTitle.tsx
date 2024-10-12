import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../FText';
import {colors} from '../../../../globalStyle';

type SubTitleProps = {
  title: string;
};

const SubTitle = ({title}: SubTitleProps) => {
  return <FText fStyle="B_14" color={colors.text} text={title} />;
};

export default SubTitle;

const styles = StyleSheet.create({});
