import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import FImage from '../../components/elements/FImage';

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
