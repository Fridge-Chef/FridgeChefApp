import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import FImage from '../../elements/FImage';

type ReviewContentProps = {
  content: {
    name: string;
    point: number;
    content: string;
    img: string;
    like: number;
  };
};

const ReviewContent = ({content}: ReviewContentProps) => {
  const handleLayout = (e: LayoutChangeEvent) => {
    console.log(e.nativeEvent.layout.height);
  };

  return (
    <View style={styles.container}>
      <View style={{flexShrink: 1, position: 'relative'}}>
        <FText
          flexShrink={1}
          nLine={4}
          fStyle="R_14"
          lineH={FWidth * 20}
          color={colors.text}
          text={content.content}
          onLayout={e => handleLayout(e)}
        />
      </View>
      {content.img && (
        <FImage
          uri={content.img}
          imgStyle="sub2"
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
    marginTop: FWidth * 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
