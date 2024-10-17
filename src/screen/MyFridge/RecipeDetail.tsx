import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/MyFridge/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/MyFridge/RecipeDetail/RecipeReview/RecipeReview';
import FImage from '../../components/elements/FImage';
import Badge from '../../components/MyFridge/RecipeDetail/Badge';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import {useScrollY} from '../../store/store';
import {RecipeListType} from '../../type/types';

type DetailItem = {
  params: {
    id: number;
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();
  const {setScrollY} = useScrollY();
  const detailData: RecipeListType[] = require('../../utils/detailListData.json');

  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      onScroll={e => setScrollY(e.nativeEvent.contentOffset.y)}>
      <View style={{position: 'relative'}}>
        <FImage
          imgStyle="detail"
          uri={detailData[route.params.id].mainImage}
          resizeMode="stretch"
          alt="디테일"
        />
        <Badge />
      </View>
      <TitleComponent detailData={detailData[route.params.id]} />
      <RecipeNote content={detailData[route.params.id].mainContent} />
      <IngredientComponent
        ingredientList={detailData[route.params.id].ingredients}
      />
      <RecipeComponent detailContent={detailData[route.params.id].step} />
      <RecipeReview title={detailData[route.params.id].mainTitle} />
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
