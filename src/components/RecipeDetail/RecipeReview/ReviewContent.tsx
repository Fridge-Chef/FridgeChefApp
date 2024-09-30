import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type ReviewContentProps = {
  content: string;
};

const ReviewContent = ({content}: ReviewContentProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        fStyle="R_16"
        lineH={FWidth * 24}
        color={colors.text}
        text={content}
      />
    </View>
  );
};

export default ReviewContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
  },
});
