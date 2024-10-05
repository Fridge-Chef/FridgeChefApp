import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import FImage from '../../../elements/FImage';

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
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: colors.white,
          }}>
          {content.content.length > 74 && content.img ? (
            <FText
              flexShrink={1}
              nLine={4}
              fStyle="R_14"
              lineH={FWidth * 20}
              color={colors.text}
              text={'... 더보기'}
            />
          ) : (
            content.content.length > 110 &&
            !content.img && (
              <FText
                flexShrink={1}
                nLine={4}
                fStyle="R_14"
                lineH={FWidth * 20}
                color={colors.text}
                text={'... 더보기'}
              />
            )
          )}
        </View>
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
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
