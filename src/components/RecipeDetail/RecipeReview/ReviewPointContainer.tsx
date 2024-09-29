import {StyleSheet, View} from 'react-native';
import React from 'react';

import {FWidth} from '../../../../globalStyle';
import Star from '../../../utils/Svg/Star';
import Star3 from '../../../utils/Svg/Star3';

const ReviewPointContainer = () => {
  return (
    <View style={styles.itemContainer}>
      <Star3 />
    </View>
  );
};

export default ReviewPointContainer;

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: FWidth * 2,
  },
});
