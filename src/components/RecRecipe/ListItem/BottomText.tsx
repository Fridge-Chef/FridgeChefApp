import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';

type BottomTextProps = {
  ingredients: string[];
};

const BottomText = ({ingredients}: BottomTextProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.B_12, styles.textColor]}>
          필요 재료 {ingredients.length}개&nbsp;/
        </Text>
        <Text style={[fontStyles.B_12, styles.textColor2]}>
          &nbsp;보유 재료 {ingredients.length}개
        </Text>
      </View>
      <Text style={[fontStyles.M_12, styles.textColor]}>
        없는 재료 : 참기름
      </Text>
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

  textColor: {
    color: colors.b500,
  },

  textColor2: {
    color: colors.secondary[1],
  },
});
