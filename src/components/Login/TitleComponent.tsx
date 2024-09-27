import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAlign}>
        <FText fStyle="B_26" color={colors.primary[2]} text="프리지셰프" />
        <FText fStyle="B_26" color={colors.text} text="에 오신걸" />
      </View>
      <FText fStyle="B_26" color={colors.text} text="환영해요 :)" />
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: FWidth * 160,
  },

  titleAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
