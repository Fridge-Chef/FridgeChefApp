import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';

type TopLineProps = {
  colorWidth: DimensionValue;
};

const TopLine = ({colorWidth}: TopLineProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.colorLine, {width: colorWidth}]} />
    </View>
  );
};

export default TopLine;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: FWidth * 4,
    backgroundColor: colors.b200,
  },

  colorLine: {
    height: FWidth * 4,
    backgroundColor: colors.primary[1],
  },
});
