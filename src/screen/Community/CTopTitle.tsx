import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../../components/elements/FText';

const CTopTitle = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_18" color={colors.text} text="나만의 레시피" />
    </View>
  );
};

export default CTopTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
