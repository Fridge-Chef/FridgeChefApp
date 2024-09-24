import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles} from '../../../../globalStyle';

type DDayTextProps = {
  day?: string;
};

const DDayText = ({day}: DDayTextProps) => {
  return <Text style={[fontStyles.B_14, {color: colors.warning}]}>{day}</Text>;
};

export default DDayText;

const styles = StyleSheet.create({});
