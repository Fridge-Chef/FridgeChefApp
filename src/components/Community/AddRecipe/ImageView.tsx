import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FImage from '../../elements/FImage';
import {FWidth} from '../../../../globalStyle';

type ImageViewProps = {
  uri: string;
};

const ImageView = ({uri}: ImageViewProps) => {
  return (
    <View style={styles.container}>
      <FImage uri={uri} imgStyle="addImg" resizeMode="cover" alt="미리보기" />
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },
});
