import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import RecipeSubTitle from '../RecipeSubTitle';

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
