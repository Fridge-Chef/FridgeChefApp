import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {RecipeListType} from '../../../../type/types';
import FText from '../../../elements/FText';
import DetailInfo from './DetailInfo';
import IngredientContainer from './IngredientContainer';
import TimeAndLevel from './TimeAndLevel';

type TitleComponentProps = {
  detailData: RecipeListType;
  items: {
    id: number;
    without: string[];
    myIngredients: string[];
  };
};

const TitleComponent = ({detailData, items}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <TimeAndLevel
        dishCategory={`${detailData.dishCategory}`}
        dishTime={detailData.dishTime}
        dishLevel={detailData.dishLevel}
      />
      <FText
        flexShrink={1}
        fStyle="B_22"
        lineH={FWidth * 32}
        color={colors.text}
        text={detailData.title}
      />
      <DetailInfo
        writer={detailData.username}
        hit={detailData.rating}
        reviews={detailData.starTotal}
        favorite={detailData.hitTotal}
      />
      <IngredientContainer title="보유 재료" detailList={items.myIngredients} />
      <IngredientContainer title="없는 재료" detailList={items.without} />
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
