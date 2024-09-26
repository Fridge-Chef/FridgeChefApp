import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import {detailList, detailList2} from '../../../utils/list';
import IngredientContainer from './IngredientContainer';
import FText from '../../elements/FText';

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.text} text={title} />
      <FText
        mTop={FWidth * 8}
        fStyle="B_14"
        color={colors.text}
        text={'★ 4.5'}
      />
      <IngredientContainer title="보유재료" detailList={detailList} />
      <IngredientContainer title="없는 재료" detailList={detailList2} />
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 32,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
