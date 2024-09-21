import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../../globalStyle';

const ImageComponent = () => {
  return (
    <Image
      source={require('../../../assets/images/Icon.png')}
      style={styles.itemImage}
      alt="이미지"
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  itemImage: {
    width: FWidth * 100,
    height: FWidth * 100,
    borderRadius: 8,
  },
});
