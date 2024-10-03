import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import {colors, FWidth} from '../../../globalStyle';

const Badge = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_14" color={colors.primary[1]} text="이 달의 레시피" />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: FWidth * 16,
    left: FWidth * 22,
    paddingVertical: FWidth * 6,
    paddingHorizontal: FWidth * 14,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.primary[1],
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
  },
});
