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
      img?: string;
      point: number;
      views: number;
      writer: string;
    };
  };
};

const UserReview = () => {
  const route = useRoute<RouteProp<RecipeType>>();
  const {content, point, views, writer, img} = route.params.item;
  // console.log(img);
  // const {uri} = Image.resolveAssetSource(img!);

  return (
    <View style={styles.container}>
      <TopComponent writer={writer} point={point} />
      <UserContent uri={img} content={content} views={views} />
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
