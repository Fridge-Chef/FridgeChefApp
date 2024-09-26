import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';

type ReviewContentProps = {
  content: string;
};

const ReviewContent = ({content}: ReviewContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.R_16, styles.textColor]}>{content}</Text>
    </View>
  );
};

export default ReviewContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
  },

  textColor: {
    color: colors.text,
    lineHeight: FWidth * 24,
  },
});
