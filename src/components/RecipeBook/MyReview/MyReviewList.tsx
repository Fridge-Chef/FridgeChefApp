import {StyleSheet, View} from 'react-native';
import React from 'react';
import ReviewItem from './ReviewItem';

type ReviewType = {
  boardId: number;
  username: string;
  star: number;
  createdAt: string;
  title: string;
  comments: string;
  imageLink: string[];
  like: number;
}[];

type MyReviewListProps = {
  list: ReviewType;
};

const MyReviewList = ({list}: MyReviewListProps) => {
  return (
    <View>
      {list.map(item => (
        <ReviewItem key={item.boardId} review={item} />
      ))}
    </View>
  );
};

export default MyReviewList;

const styles = StyleSheet.create({});
