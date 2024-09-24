import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight} from '../../../globalStyle';

type ImageComponentProps = {
  imgUrl: string;
};

const ImageComponent = ({imgUrl}: ImageComponentProps) => {
  return (
    <View>
      <Image
        style={styles.imgStyle}
        source={
          imgUrl ? {uri: imgUrl} : require('../../assets/images/textImage.jpg')
        }
        alt="디테일 이미지"
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: FHeight * 277,
    objectFit: 'cover',
    backgroundColor: colors.white,
  },
});
