import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors, fontStyles} from '../../../globalStyle';

type SubTitleComponentProps = {
  title: string;
};

const SubTitleComponent = ({title}: SubTitleComponentProps) => {
  return <Text style={[fontStyles.B_18, styles.textColor]}>{title}</Text>;
};

export default SubTitleComponent;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
  },
});
