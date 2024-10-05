import {StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../../globalStyle';
import FText from '../../elements/FText';

type SubTitleComponentProps = {
  title: string;
};

const SubTitleComponent = ({title}: SubTitleComponentProps) => {
  return <FText fStyle="B_18" color={colors.text} text={title} />;
};

export default SubTitleComponent;

const styles = StyleSheet.create({});
