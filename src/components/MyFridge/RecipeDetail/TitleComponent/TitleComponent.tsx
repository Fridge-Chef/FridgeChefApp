import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import {detailList, detailList2} from '../../../../utils/list';
import IngredientContainer from './IngredientContainer';
import FText from '../../../elements/FText';
import Star3 from '../../../../utils/Svg/Star3';
import DetailScoreStar from '../../../../utils/Svg/DetailScoreStar';
import DetailInfo from './DetailInfo';

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.text} text={title} />
      <DetailInfo />
      <IngredientContainer title="보유재료" detailList={detailList} />
      <IngredientContainer title="없는 재료" detailList={detailList2} />
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
