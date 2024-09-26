import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

type SubTitleComponentProps = {
  title: string;
};

const SubTitleComponent = ({title}: SubTitleComponentProps) => {
  return (
    <View style={styles.textLine}>
      <Text style={[fontStyles.B_18, styles.textColor]}>{title}</Text>
    </View>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({
  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
