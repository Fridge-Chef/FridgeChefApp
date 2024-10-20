import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import IngredientContainer from './IngredientContainer';
import FText from '../../../elements/FText';
import DetailInfo from './DetailInfo';
import TimeAndLevel from './TimeAndLevel';
import {RecipeListType} from '../../../../type/types';

type TitleComponentProps = {
  detailData: RecipeListType;
};

const TitleComponent = ({detailData}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <TimeAndLevel
        dishCategory={`${detailData.dishCategory.style}, ${detailData.dishCategory.type}`}
        dishTime={detailData.dishTime}
        dishLevel={detailData.dishLevel}
      />
      <FText
        flexShrink={1}
        fStyle="B_22"
        lineH={FWidth * 32}
        color={colors.text}
        text={detailData.name}
      />
      <DetailInfo
        writer={detailData.writer}
        like={detailData.likes}
        favorite={detailData.favorites}
        reviews={detailData.reviews}
      />
      <IngredientContainer
        title="보유재료"
        detailList={detailData.recipeIngredients}
      />
      <IngredientContainer
        title="없는 재료"
        detailList={detailData.recipeIngredients}
      />
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
