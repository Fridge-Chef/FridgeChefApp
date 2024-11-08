import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

const StorageSubTipTitle = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_20" color={colors.black} text="식재료 관리 꿀팁!" />
    </View>
  );
};

export default StorageSubTipTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
  },
});
