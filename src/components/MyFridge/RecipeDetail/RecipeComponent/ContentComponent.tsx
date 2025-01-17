import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';

type ContentComponentProps = {
  id: number;
  content: string;
  image: string;
};

const ContentComponent = ({id, content, image}: ContentComponentProps) => {
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
        text={content}
      />
      {image && (
        <View style={{marginTop: FWidth * 8}}>
          <FImage uri={image} borderRadius={8} imgStyle="detailSub" />
        </View>
      )}
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
