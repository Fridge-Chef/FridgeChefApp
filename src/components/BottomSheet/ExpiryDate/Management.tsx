import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {
  useBottomSheetRef,
  useCategoriesText,
  useIngredientTitle,
} from '../../../store/store';
import BottomButton from '../BottomButton';
import {colors, FWidth} from '../../../../globalStyle';
import ExpiryDate from './ExpiryDate';
import Categories from './Categories';

const Management = () => {
  const {ingredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {
    category,
    setCategory,
    expiryDate,
    setExpiryDate,
    itemNumber,
    setItemNumber,
  } = useCategoriesText();

  const handleSubmit = () => {
    setCategory('');

    bottomSheetRef.current?.close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle
          title={`${ingredientTitle} 재료 관리하기`}
          setCategory={setCategory}
          setItemNumber={setItemNumber}
        />
        <ExpiryDate />
        <Categories
          itemNumber={itemNumber}
          setItemNumber={setItemNumber}
          setCategory={setCategory}
        />
      </View>
      <BottomButton
        title="확인"
        buttonColor={category ? colors.primary[1] : colors.disabled2}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Management;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 22,
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
  },
});
