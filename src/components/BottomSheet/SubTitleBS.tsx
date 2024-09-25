import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles} from '../../../globalStyle';

type SubTitleBSProps = {
  title: string;
};

const SubTitleBS = ({title}: SubTitleBSProps) => {
  return <Text style={[fontStyles.M_14, styles.textColor]}>{title}</Text>;
};

export default SubTitleBS;

const styles = StyleSheet.create({
  textColor: {
    color: colors.subText,
  },
});
