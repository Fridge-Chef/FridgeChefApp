import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type BottomTextProps = {
  recipeIngredients: string[];
  have: number;
};

const BottomText = ({recipeIngredients, have}: BottomTextProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FText
          fStyle="M_12"
          color={colors.b500}
          text={`재료 ${recipeIngredients.length + have}개 중 `}
        />
        <FText
          fStyle="M_12"
          color={colors.secondary[1]}
          text={`${have}개 보유`}
        />
      </View>
      <FText
        flexShrink={1}
        nLine={1}
        lineH={FWidth * 18}
        fStyle="M_12"
        color={colors.b500}
        text={`없는 재료 : ${
          recipeIngredients.length > 0 ? recipeIngredients : '없음'
        }`}
      />
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
