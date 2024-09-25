import {StyleSheet, View} from 'react-native';
import React from 'react';
import {reviewContent} from '../../../utils/list';
import {FHeight, FWidth} from '../../../../globalStyle';
import Review from './Review';

const ReviewsComponent = () => {
  const reviews = [
    {id: 1, name: '김민영', point: 4, content: reviewContent.content},
    {id: 2, name: '김인영', point: 3, content: reviewContent.content},
    {id: 3, name: '김한영', point: 5, content: reviewContent.content},
    {id: 4, name: '김현영', point: 2, content: reviewContent.content},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </View>
    </View>
  );
};

export default ReviewsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },

  subContainer: {
    marginTop: FWidth * -16,
  },
});
