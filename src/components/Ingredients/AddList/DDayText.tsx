import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';

type DDayTextProps = {
  day?: string;
};

const DDayText = ({day}: DDayTextProps) => {
  return (
    <View style={styles.textLine}>
      <Text style={[fontStyles.B_14, styles.textColor]}>{day}</Text>
    </View>
  );
};

export default DDayText;

const styles = StyleSheet.create({
  textLine: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.warning,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
