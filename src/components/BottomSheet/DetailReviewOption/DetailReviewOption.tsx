import {StyleSheet, View} from 'react-native';
import React from 'react';

import {FWidth} from '../../../../globalStyle';
import TopClose from './TopClose';
import MenuList from './MenuList';

const DetailReviewOption = () => {
  return (
    <View style={styles.container}>
      <TopClose />
      <MenuList />
    </View>
  );
};

export default DetailReviewOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 16,
  },
});
