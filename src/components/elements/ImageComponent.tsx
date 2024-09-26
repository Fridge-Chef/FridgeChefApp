import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../globalStyle';

type ImageComponentProps = {
  imgStyle: 'main' | 'detail' | 'sub' | 'myPage';
  uri: string;
  resizeMode?: 'center' | 'contain' | 'cover' | 'repeat' | 'stretch';
  alt?: string;
};

const ImageComponent = ({
  imgStyle,
  uri,
  resizeMode,
  alt,
}: ImageComponentProps) => {
  const imgStyleList = {
    main: styles.mainImage,
    detail: styles.detailImage,
    sub: styles.subImage,
    myPage: styles.myPageUser,
  };

  return (
    <Image
      source={uri ? {uri} : require('../../assets/images/textImage.jpg')}
      style={imgStyleList[imgStyle]}
      resizeMode={resizeMode}
      alt={alt}
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  mainImage: {
    width: FWidth * 100,
    height: FWidth * 100,
    borderRadius: 12,
    objectFit: 'cover',
  },

  detailImage: {
    width: '100%',
    height: FWidth * 277,
    backgroundColor: colors.white,
  },

  subImage: {
    width: FHeight * 60,
    height: FHeight * 60,
    borderRadius: 8,
  },

  myPageUser: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});
