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
        like={detailData.rating}
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
