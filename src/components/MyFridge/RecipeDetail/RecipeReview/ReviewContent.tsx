import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import FImage from '../../../elements/FImage';

type ReviewContentProps = {
  content: {
    comments: string;
    imageLink: string[];
  };
};

const ReviewContent = ({content}: ReviewContentProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexShrink: 1, position: 'relative'}}>
        <FText
          flexShrink={1}
          nLine={4}
          fStyle="R_14"
          lineH={FWidth * 20}
          color={colors.text}
          text={content.comments}
        />
      </View>
      {content.imageLink[0] && (
        <FImage
          uri={content.imageLink[0]}
          imgStyle="sub2"
          borderRadius={8}
          resizeMode="stretch"
          alt="리뷰 이미지"
        />
      )}
    </View>
  );
};

export default ReviewContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
