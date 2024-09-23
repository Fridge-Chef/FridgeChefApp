import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../../globalStyle';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Icon.png')} alt="이미지" />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    width: FHeight * 100,
    height: FHeight * 100,
    backgroundColor: 'gray',
    borderRadius: 12,
    objectFit: 'cover',
    overflow: 'hidden',
  },
});
