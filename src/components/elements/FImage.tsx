import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../globalStyle';

type FImageProps = {
  imgStyle: 'main' | 'detail' | 'sub' | 'sub2' | 'myPage';
  uri: string;
  resizeMode?: 'center' | 'contain' | 'cover' | 'repeat' | 'stretch';
  alt?: string;
};

const FImage = ({imgStyle, uri, resizeMode, alt}: FImageProps) => {
  const imgStyleList = {
    main: styles.mainImage,
    detail: styles.detailImage,
    sub: styles.subImage,
    sub2: styles.sub2Image,
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

export default FImage;

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
    width: FWidth * 60,
    height: FWidth * 60,
    borderRadius: 8,
  },
  sub2Image: {
    width: FWidth * 80,
    height: FWidth * 80,
    borderRadius: 8,
  },

  myPageUser: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});
