import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {fontStyles, FWidth} from '../../../globalStyle';

type SubTitleComponentProps = {
  title: string;
  color?: string;
  onPress?: () => void;
};

const SubTitleComponent = ({title, color, onPress}: SubTitleComponentProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.B_14, styles.textLine, {color: color}]}>
          {title}
        </Text>
      </View>
    </FButton>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({
  textContainer: {
    height: FWidth * 20,
  },

  textLine: {
    includeFontPadding: false,
    alignItems: 'center',
  },
});
