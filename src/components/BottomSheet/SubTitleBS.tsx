import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

type SubTitleBSProps = {
  title: string;
};

const SubTitleBS = ({title}: SubTitleBSProps) => {
  return (
    <View style={styles.textLine}>
      <Text style={[fontStyles.B_14, styles.textColor]}>{title}</Text>
    </View>
  );
};

export default SubTitleBS;

const styles = StyleSheet.create({
  textLine: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.subText,
    alignItems: 'center',
    includeFontPadding: false,
  },
});