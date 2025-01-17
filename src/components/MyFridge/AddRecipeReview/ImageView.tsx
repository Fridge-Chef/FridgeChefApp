import {StyleSheet, View} from 'react-native';
import React from 'react';
import FImage from '../../elements/FImage';
import {colors, FWidth} from '../../../../globalStyle';
import RecipeBookClose from '../../../utils/Svg/RecipeBookClose';
import FButton from '../../elements/FButton';

type ImageViewProps = {
  uri: string;
  onPress: () => void;
};

const ImageView = ({uri, onPress}: ImageViewProps) => {
  return (
    <View style={styles.container}>
      <FImage uri={uri} imgStyle="addImg" borderRadius={8} />
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.imgDelete}
        onPress={onPress}>
        <RecipeBookClose />
      </FButton>
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: FWidth * 56,
  },

  imgDelete: {
    position: 'absolute',
    top: FWidth * 16,
    right: FWidth * 16,
    padding: FWidth * 6,
    borderRadius: 100,
    backgroundColor: colors.white,
    elevation: 1,
  },
});
