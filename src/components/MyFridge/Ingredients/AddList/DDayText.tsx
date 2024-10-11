import {StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type DDayTextProps = {
  day?: string;
};

const DDayText = ({day}: DDayTextProps) => {
  console.log('day', day);
  return (
    <FText
      fStyle={day === '오늘 이후 폐기' ? 'M_12' : 'M_16'}
      color={colors.error}
      text={day}
    />
  );
};

export default DDayText;

const styles = StyleSheet.create({});
