import {StyleSheet, View} from 'react-native';
import React from 'react';

import {FWidth} from '../../../../globalStyle';
import Star from '../../Svg/Star';

const ReviewPointContainer = () => {
  return (
    <View style={styles.itemContainer}>
      <Star />
    </View>
  );
};

export default ReviewPointContainer;

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: FWidth * 2,
  },
});
