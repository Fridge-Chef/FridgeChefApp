import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles} from '../../../globalStyle';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.B_22, {color: colors.text}]}>
        TitleComponent
      </Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 32,
  },
});
