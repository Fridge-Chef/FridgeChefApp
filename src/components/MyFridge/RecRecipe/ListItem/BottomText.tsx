import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type BottomTextProps = {
  ingredients: {name: string; quantity: string}[];
};

const BottomText = ({ingredients}: BottomTextProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FText
          fStyle="M_12"
          color={colors.b500}
          text={`재료 ${ingredients.length}개 중 `}
        />
        <FText
          fStyle="M_12"
          color={colors.secondary[1]}
          text={`${ingredients.length}개 보유`}
        />
      </View>
      <FText fStyle="M_12" color={colors.b500} text="없는 재료 : 참기름" />
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
