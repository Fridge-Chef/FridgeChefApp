import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgImage from '../../elements/SvgImage';
import {FWidth} from '../../../../globalStyle';
import Star from '../../Test/Star';

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
