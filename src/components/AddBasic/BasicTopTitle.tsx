import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

const BasicTopTitle = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_20" color={colors.text} text={'레시피 검색을 위해'} />
      <FText
        fStyle="B_20"
        color={colors.text}
        text={'기본 재료들을 먼저 등록할까요?'}
      />
    </View>
  );
};

export default BasicTopTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 64,
  },
});