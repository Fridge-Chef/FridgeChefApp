import {StyleSheet, View} from 'react-native';
import React from 'react';
import ReviewItem from './ReviewItem';

type ReviewType = {
  id: number;
  writer: string;
  point: number;
  title: string;
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
      {list.map(item => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </View>
  );
};

export default MyReviewList;

const styles = StyleSheet.create({});
