import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';

type NoContentProps = {
  title: string;
  buttonTitle?: string;
  onPress?: () => void;
};

const NoContent = ({title, buttonTitle, onPress}: NoContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.M_18, styles.textColor]}>{title}</Text>
      </View>
      {buttonTitle && (
        <FButton buttonStyle="addButton" onPress={onPress}>
          <View style={styles.textLine2}>
            <Text style={[fontStyles.B_16, styles.textColor2]}>
              {buttonTitle}
            </Text>
          </View>
        </FButton>
      )}
    </View>
  );
};

export default NoContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 244,
    alignItems: 'center',
  },

  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textLine2: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.b400,
    includeFontPadding: false,
    alignItems: 'center',
  },

  textColor2: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
