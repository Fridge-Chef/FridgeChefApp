import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, FWidth} from '../../../../../globalStyle';
import TopComponent from './TopComponent';
import UserContent from './UserContent';

type RecipeType = {
  params: {
    item: {
      content: string;
      id: number;
      img: number;
      likes: number;
      point: number;
      title: string;
      views: number;
      writer: string;
    };
  };
};

const UserReview = () => {
  const route = useRoute<RouteProp<RecipeType>>();
  const {content, likes, point, views, writer, img} = route.params.item;
  const {uri} = Image.resolveAssetSource(img);

  return (
    <View style={styles.container}>
      <TopComponent writer={writer} point={point} />
      <UserContent uri={uri} content={content} views={views} />
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
