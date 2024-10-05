import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipeSubTitle from '../RecipeSubTitle';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';

const StepTitle = () => {
  return (
    <View style={styles.container}>
      <RecipeSubTitle title="조리 방법" required />
      <FText
        mTop={FWidth * 4}
        fStyle="R_14"
        color={colors.subText}
        text="최소 2단계 이상 입력해주세요"
      />
    </View>
  );
};

export default StepTitle;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 12,
  },
});
