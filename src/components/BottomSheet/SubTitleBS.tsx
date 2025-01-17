import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyle';
import FText from '../elements/FText';

type SubTitleBSProps = {
  title: string;
};

const SubTitleBS = ({title}: SubTitleBSProps) => {
  return <FText fStyle="B_14" color={colors.subText} text={title} />;
};

export default SubTitleBS;

const styles = StyleSheet.create({});
