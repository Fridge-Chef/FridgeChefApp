import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FHeight} from '../../../../globalStyle';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/textImage.jpg')}
        style={styles.imageStyle}
        alt="이미지"
      />
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
    overflow: 'hidden',
  },

  imageStyle: {
    width: FHeight * 100,
    height: FHeight * 100,
    objectFit: 'cover',
  },
});
