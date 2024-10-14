import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import {detailList, detailList2} from '../../../../utils/list';
import IngredientContainer from './IngredientContainer';
import FText from '../../../elements/FText';
import DetailInfo from './DetailInfo';

type TitleComponentProps = {
  writer: string;
  title: string;
  like: number;
  favorites: number;
  ingredients: {
    name: string;
    quantity: string;
  }[];
};

const TitleComponent = ({
  writer,
  title,
  like,
  favorites,
  ingredients,
}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        fStyle="B_22"
        lineH={FWidth * 32}
        color={colors.text}
        text={title}
      />
      <DetailInfo writer={writer} like={like} favorite={favorites} />
      <IngredientContainer title="보유재료" detailList={ingredients} />
      <IngredientContainer title="없는 재료" detailList={ingredients} />
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
