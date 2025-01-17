import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FastImage, {ResizeMode} from '@d11/react-native-fast-image';
type FImageProps = {
  imgStyle:
    | 'main'
    | 'detail'
    | 'detailSub'
    | 'sub'
    | 'sub2'
    | 'myPage'
    | 'addImg'
    | 'rDetail';
  uri: string;
  resizeMode?: ResizeMode | undefined;
  alt?: string;
  borderRadius?: number;
};

const FImage = ({
  imgStyle,
  uri,
  resizeMode = FastImage.resizeMode.cover,
  alt,
  borderRadius,
}: FImageProps) => {
  const imgStyleList = {
    main: styles.mainImage,
    detail: styles.detailImage,
    detailSub: styles.detailSubImage,
    sub: styles.subImage,
    sub2: styles.sub2Image,
    myPage: styles.myPageUser,
    addImg: styles.addImageView,
    rDetail: styles.reviewDetail,
  };

  return (
    <FastImage
      source={uri ? {uri} : require('../../assets/images/noImage.png')}
      style={[imgStyleList[imgStyle], {borderRadius: borderRadius}]}
      resizeMode={resizeMode}
    />
  );
};

export default FImage;

const styles = StyleSheet.create({
  mainImage: {
    width: FWidth * 100,
    height: FWidth * 100,
    borderRadius: 8,
    objectFit: 'cover',
  },

  detailImage: {
    width: '100%',
    height: FWidth * 277,
    backgroundColor: colors.white,
  },

  detailSubImage: {
    width: '100%',
    height: FWidth * 200,
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
    width: FWidth * 58,
    height: FWidth * 58,
    // borderRadius: 50,
  },

  addImageView: {
    width: '100%',
    height: FWidth * 277,
  },

  reviewDetail: {
    width: '100%',
    height: FWidth * 300,
  },
});
