import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import ItemsComponent from './ItemsComponent';
import {detailList, detailList2} from '../../../utils/list';
import IngredientContainer from './IngredientContainer';

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.B_22, styles.textColor]}>{title}</Text>
      <View style={{marginTop: FHeight * 8}}>
        <Text style={[fontStyles.B_14, styles.textColor]}>★ 4.5</Text>
      </View>
      <IngredientContainer title="보유재료" detailList={detailList} />
      <IngredientContainer title="없는 재료" detailList={detailList2} />
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FHeight * 32,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },

  textColor: {
    color: colors.text,
  },
});
