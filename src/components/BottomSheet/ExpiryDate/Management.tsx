import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {
  useAddCheck,
  useCategoriesText,
  useIngredientTitle,
} from '../../../store/store';
import BottomButton from '../BottomButton';
import {colors, FWidth} from '../../../../globalStyle';
import ExpiryDate from './ExpiryDate';
import Categories from './Categories';
import {
  useGetIngredients,
  useIngredientsCategory,
} from '../../../api/ingredientsQuery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListData} from '../../../type/types';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';

const Management = () => {
  const {ingredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {refetch} = useGetIngredients();
  const {mutate} = useIngredientsCategory();
  const {check, setCheck} = useAddCheck();
  const {
    category,
    setCategory,
    expiryDate,
    setExpiryDate,
    itemNumber,
    setItemNumber,
  } = useCategoriesText();

  const handleSubmit = async () => {
    if (!category || expiryDate === '날짜를 선택해 주세요') {
      return;
    }
    const token = await AsyncStorage.getItem('token');
    if (token) {
      mutate(
        {
          name: ingredientTitle,
          category: category,
          date: expiryDate,
        },
        {
          onSuccess: () => {
            refetch();
            setCategory('');
            setExpiryDate('날짜를 선택해 주세요');
            bottomSheetRef.current?.close();
          },
        },
      );
    } else {
      const storedData = await AsyncStorage.getItem('ingredients');
      const data = storedData ? JSON.parse(storedData) : [];
      const updatedData = data.map(
        (item: ListData) =>
          item.ingredientName === ingredientTitle
            ? {
                ...item,
                ingredientCategory: category,
                expirationDate: expiryDate,
              } // 수정된 항목
            : item, // 수정되지 않은 항목
      );

      await AsyncStorage.setItem('ingredients', JSON.stringify(updatedData));
      setCheck(!check);
      setCategory('');
      setExpiryDate('날짜를 선택해 주세요');
      bottomSheetRef.current?.close();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle
          title={`${ingredientTitle} 재료 관리하기`}
          onPress={() => {
            setCategory('');
            setItemNumber(0);
          }}
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
        buttonColor={
          category && expiryDate !== '날짜를 선택해 주세요'
            ? colors.primary[1]
            : colors.disabled2
        }
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
