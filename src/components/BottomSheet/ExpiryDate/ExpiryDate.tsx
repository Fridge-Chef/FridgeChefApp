import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {colors, FWidth} from '../../../../globalStyle';
import {useBottomSheetRef, useIngredientTitle} from '../../../store/store';
import BottomButton from '../BottomButton';
import FText from '../../elements/FText';
import SubTitleBS from '../SubTitleBS';
import FButton from '../../elements/FButton';

const ExpiryDate = () => {
  return (
    <View style={styles.container}>
      <SubTitleBS title="유통기한" />
      <FButton marginTop={FWidth * 10} buttonStyle="selected">
        <FText
          fStyle="M_16"
          color={colors.disabled}
          text={'유통기한을 선택해주세요'}
        />
      </FButton>
    </View>
  );
};

export default ExpiryDate;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },
});
