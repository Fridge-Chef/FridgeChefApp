import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

type BottomButtonProps = {
  title: string;
  buttonColor: string;
  onPress: () => void;
};

const BottomButton = ({title, buttonColor, onPress}: BottomButtonProps) => {
  return (
    <FButton buttonStyle="submit" buttonColor={buttonColor} onPress={onPress}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.B_20, styles.textColor]}>{title}</Text>
      </View>
    </FButton>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.white,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
