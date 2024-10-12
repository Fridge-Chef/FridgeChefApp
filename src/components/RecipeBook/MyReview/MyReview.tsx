import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowSubTitle from '../../elements/SubTitle/ArrowSubTitle';
import MyReviewList from './MyReviewList';
import {reviewContent} from '../../../utils/list';

type ReviewType = {
  id: number;
  writer: string;
  point: number;
  content: string;
  img: string;
  views: number;
};

const MyReview = () => {
  const reviews: ReviewType[] | null = [
    {
      id: 1,
      writer: '김민영',
      point: 4,
      content: reviewContent.content,
      img: '',
      views: 3,
    },
    {
      id: 2,
      writer: '김인영',
      point: 3,
      content: reviewContent.content,
      img: 'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=2000&format=webply&optimize=medium',
      views: 5,
    },
    {
      id: 3,
      writer: '김한영',
      point: 5,
      content: reviewContent.content,
      img: '',
      views: 7,
    },
    {
      id: 4,
      writer: '김현영',
      point: 2,
      content: reviewContent.content,
      img: '',
      views: 12,
    },
  ];
  return (
    <View>
      <ArrowSubTitle />
      <MyReviewList list={reviews} />
    </View>
  );
};

export default MyReview;

const styles = StyleSheet.create({});
