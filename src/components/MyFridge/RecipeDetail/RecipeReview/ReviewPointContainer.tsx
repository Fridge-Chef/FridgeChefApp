import React from 'react';
import {StyleSheet, View} from 'react-native';

import {FWidth} from '../../../../../globalStyle';
import Star3 from '../../../../utils/Svg/Star3';

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
