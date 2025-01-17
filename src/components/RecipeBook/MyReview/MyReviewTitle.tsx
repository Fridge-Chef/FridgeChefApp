import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

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
