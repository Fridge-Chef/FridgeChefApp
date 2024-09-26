import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type BottomTextProps = {
  ingredients: string[];
};

const BottomText = ({ingredients}: BottomTextProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FText
          fStyle="B_12"
          color={colors.b500}
          text={`필요 재료 ${ingredients.length}개 /`}
        />
        <FText
          fStyle="B_12"
          color={colors.secondary[1]}
          text={` 보유 재료 ${ingredients.length}개`}
        />
      </View>
      <FText fStyle="M_12" color={colors.b500} text="없는 재료 : 참기름" />
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
