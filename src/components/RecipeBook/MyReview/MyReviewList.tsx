import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Review from '../../MyFridge/RecipeDetail/RecipeReview/Review';

type ReviewType = {
  id: number;
  writer: string;
  point: number;
  content: string;
  img: string;
  views: number;
}[];

type MyReviewListProps = {
  list: ReviewType;
};

const MyReviewList = ({list}: MyReviewListProps) => {
  return (
    <View>
      {list.map((item, index) => (
        <Review key={item.id} review={item} />
      ))}
    </View>
  );
};

export default MyReviewList;

const styles = StyleSheet.create({});
