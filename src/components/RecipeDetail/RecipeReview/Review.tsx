import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';

type ReviewProps = {
  review: {
    name: string;
    point: number;
    content: string;
  };
};

const Review = ({review}: ReviewProps) => {
  return (
    <View style={styles.container}>
      <UserInfo name={review.name} point={review.point} />
      <View>
        <ReviewContent content={review.content} />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
});
