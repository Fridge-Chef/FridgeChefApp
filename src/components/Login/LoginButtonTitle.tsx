import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

type LoginButtonTitleProps = {
  title: string;
};

const LoginButtonTitle = ({title}: LoginButtonTitleProps) => {
  return (
    <View style={styles.textLine}>
      <Text style={[fontStyles.B_18, styles.textColor]}>{title}</Text>
    </View>
  );
};

export default LoginButtonTitle;

const styles = StyleSheet.create({
  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    marginLeft: FWidth * 6,
    alignItems: 'center',
    includeFontPadding: false,
  },
});
