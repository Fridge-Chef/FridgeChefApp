import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import {detailList, detailList2} from '../../../utils/list';
import IngredientContainer from './IngredientContainer';
import FText from '../../elements/FText';
import Star3 from '../../../utils/Svg/Star3';

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.text} text={title} />
      <View style={styles.iconAlign}>
        <Star3 />
        <FText
          mLeft={FWidth * 4}
          fStyle="B_14"
          color={colors.text}
          text={'4.5'}
        />
      </View>
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

  iconAlign: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
