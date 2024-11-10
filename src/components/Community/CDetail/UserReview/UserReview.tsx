import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, FWidth} from '../../../../../globalStyle';
import TopComponent from './TopComponent';
import UserContent from './UserContent';

type RecipeType = {
  params: {
    item: {
      boardId: number;
      comments: string;
      createdAt: string;
      id: number;
      imageLink: string[];
      like: number;
      star: number;
      userName: string;
    };
  };
};

const UserReview = () => {
  const route = useRoute<RouteProp<RecipeType>>();
  const {comments, star, like, userName, imageLink, createdAt} =
    route.params.item;

  return (
    <View style={styles.container}>
      <TopComponent writer={userName} point={star} createdAt={createdAt} />
      <UserContent uri={imageLink} content={comments} views={like} />
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 32,
  },
});
