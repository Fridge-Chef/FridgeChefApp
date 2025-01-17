import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../../components/elements/FText';

const CTopTitle = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_18" color={colors.text} text="모든 레시피" />
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
