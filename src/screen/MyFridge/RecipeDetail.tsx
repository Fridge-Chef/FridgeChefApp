import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/MyFridge/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/MyFridge/RecipeDetail/RecipeReview/RecipeReview';
import FImage from '../../components/elements/FImage';
import FText from '../../components/elements/FText';
import Badge from '../../components/MyFridge/RecipeDetail/Badge';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import {detailContent, detailList3} from '../../utils/list';
import {useScrollY} from '../../store/store';

type DetailItem = {
  params: {
    title: string;
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();
  const {setScrollY} = useScrollY();
  const content =
    '"요즘 다이어트 중이라 닭가슴살만 먹는 게 너무 지겨워서 뭔가 색다른 요리가 없을까 고민하다가 만든 김치죽이에요. 매번 닭가슴살만 먹으니 맛이 심심했는데, 김치를 넣으니 매콤하면서도 속이 편하고 든든하더라고요. 추운 날씨에 따뜻하게 먹기 딱 좋은 요리라서 자주 해먹게 되네요. 몸도 챙기고 입도 즐거운 한 끼로 추천해요!"';
  const ingredientList = detailList3;
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      onScroll={e => setScrollY(e.nativeEvent.contentOffset.y)}>
      <View style={{position: 'relative'}}>
        <FImage imgStyle="detail" uri="" resizeMode="stretch" alt="디테일" />
        <Badge />
      </View>
      <TitleComponent title={route.params.title} />
      <RecipeNote content={content} />
      <IngredientComponent ingredientList={ingredientList} />
      <RecipeComponent detailContent={detailContent} />
      <RecipeReview title={route.params.title} />
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
