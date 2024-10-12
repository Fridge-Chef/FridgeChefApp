import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../FText';
import {colors} from '../../../../globalStyle';

type SubTitle2Props = {
  title: string;
};

const SubTitle2 = ({title}: SubTitle2Props) => {
  return <FText fStyle="B_18" color={colors.text} text={title} />;
};

export default SubTitle2;

const styles = StyleSheet.create({});
