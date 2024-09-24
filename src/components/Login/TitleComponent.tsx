import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles} from '../../../globalStyle';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAlign}>
        <Text style={[fontStyles.B_26, styles.textColor2]}>프리지셰프</Text>
        <Text style={[fontStyles.B_26, styles.textColor]}>에 오신걸</Text>
      </View>
      <Text style={[fontStyles.B_26, styles.textColor]}>환영합니다!</Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: FHeight * 160,
  },

  titleAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textColor: {
    color: colors.text,
  },

  textColor2: {
    color: colors.primary[2],
  },
});
