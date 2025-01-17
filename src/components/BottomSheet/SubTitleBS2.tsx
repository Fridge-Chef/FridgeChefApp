import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyle';
import FText from '../elements/FText';

type SubTitleBS2Props = {
  title: string;
};

const SubTitleBS2 = ({title}: SubTitleBS2Props) => {
  return <FText fStyle="M_16" color={colors.text} text={title} />;
};

export default SubTitleBS2;

const styles = StyleSheet.create({});
