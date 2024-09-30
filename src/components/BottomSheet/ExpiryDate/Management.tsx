import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {useBottomSheetRef, useIngredientTitle} from '../../../store/store';
import BottomButton from '../BottomButton';
import {colors, FWidth} from '../../../../globalStyle';
import ExpiryDate from './ExpiryDate';
import Categories from './Categories';

const Management = () => {
  const [inputTitle, setInputTitle] = useState('');
  const {ingredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('미분류');

  const handleSubmit = () => {
    setInputTitle('');
    setIsOpen(false);
    setCategory('미분류');
    bottomSheetRef.current?.close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle
          title={`${ingredientTitle} 관리하기`}
          setIsOpen={setIsOpen}
          setCategory={setCategory}
        />
        <ExpiryDate />
        <Categories
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          category={category}
          setCategory={setCategory}
        />
      </View>
      <BottomButton
        title="확인"
        buttonColor={inputTitle ? colors.text : colors.disabled2}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Management;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
    paddingTop: FWidth * 22,
    paddingHorizontal: FWidth * 22,
  },
});
