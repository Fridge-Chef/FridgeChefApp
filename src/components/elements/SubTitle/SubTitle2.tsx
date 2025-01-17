import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import FText from '../FText';

type SubTitle2Props = {
  title: string;
};

const SubTitle2 = ({title}: SubTitle2Props) => {
  return <FText fStyle="B_18" color={colors.text} text={title} />;
};

export default SubTitle2;

const styles = StyleSheet.create({});
