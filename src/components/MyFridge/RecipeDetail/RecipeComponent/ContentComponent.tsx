import {StyleSheet, View} from 'react-native';
import React, {Children} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import FImage from '../../../elements/FImage';

type ContentComponentProps = {
  id: number;
  step: string;
  image: string;
};

const ContentComponent = ({id, step, image}: ContentComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepNumber}>
        <FText fStyle="B_14" color={colors.white} text={'STEP ' + id} />
      </View>
      <FText
        flexShrink={1}
        fStyle="R_16"
        lineH={FWidth * 24}
        color={colors.black}
        text={step}
      />
      <View style={{marginTop: FWidth * 8}}>
        <FImage
          uri={image}
          imgStyle="detailSub"
          resizeMode="stretch"
          alt="디테일 이미지"
        />
      </View>
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 32,
  },

  stepNumber: {
    paddingVertical: FWidth * 2,
    paddingHorizontal: FWidth * 10,
    borderRadius: 50,
    backgroundColor: colors.primary[1],
    marginBottom: FWidth * 12,
    alignSelf: 'flex-start',
  },
});
