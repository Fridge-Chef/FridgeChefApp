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
      <Text style={[fontStyles.M_18, styles.textColor]}>{title}</Text>
      {buttonTitle && (
        <FButton buttonStyle="addButton" onPress={onPress}>
          <Text style={[fontStyles.B_16, styles.textColor2]}>
            {buttonTitle}
          </Text>
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

  textColor: {
    color: colors.b400,
  },

  textColor2: {
    color: colors.text,
  },
});
