import {StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../../globalStyle';
import FText from '../../elements/FText';

type DDayTextProps = {
  day?: string;
};

const DDayText = ({day}: DDayTextProps) => {
  return <FText fStyle="B_14" color={colors.error} text={day} />;
};

export default DDayText;

const styles = StyleSheet.create({});
