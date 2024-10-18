import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../../elements/FText';
import {colors, FWidth} from '../../../../globalStyle';

type MyReviewTitleProps = {
  title: string;
};

const MyReviewTitle = ({title}: MyReviewTitleProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        nLine={2}
        lineH={FWidth * 24}
        fStyle="M_16"
        color={colors.black}
        text={title}
      />
    </View>
  );
};

export default MyReviewTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
  },
});
