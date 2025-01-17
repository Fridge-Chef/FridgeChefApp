import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.text} text="오늘도 맛있는 한 끼," />
      <View style={styles.titleAlign}>
        <FText fStyle="B_22" color={colors.primary[1]} text="프리지셰프" />
        <FText fStyle="B_22" color={colors.text} text="가 도와드릴게요!" />
      </View>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // marginBottom: FWidth * 160,
    marginBottom: FWidth * 48,
  },

  titleAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
