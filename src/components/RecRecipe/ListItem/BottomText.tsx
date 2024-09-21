import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, fontFamilies} from '../../../../globalStyle';

type BottomTextProps = {
  ingredients: string[];
};

const BottomText = ({ingredients}: BottomTextProps) => {
  return (
    <View>
      <Text style={styles.itemBottomText}>
        필요 재료 {ingredients.length}개 / 보유 재료 {ingredients.length}개
      </Text>
      <Text style={[styles.itemBottomText, {marginTop: 5}]}>
        없는 재료 : 참기름
      </Text>
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  itemBottomText: {
    color: '#545559',
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 14,
    lineHeight: FHeight * 16,
  },
});
