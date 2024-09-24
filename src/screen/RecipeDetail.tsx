import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight} from '../../globalStyle';
import ImageComponent from '../components/RecipeDetail/ImageComponent';
import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../components/RecipeDetail/TitleComponent';

type DetailItem = {
  params: {
    title: string;
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();
  console.log(route.params.title);
  return (
    <View style={styles.container}>
      <ImageComponent imgUrl="" />
      <TitleComponent />
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
