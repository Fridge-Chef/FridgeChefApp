import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomButton from '../BottomButton';
import {colors, FWidth} from '../../../../globalStyle';
import TopTitle from '../TopTitle';
import FoodStyleList from './FoodStyleList';
import FoodTypeList from './FoodTypeList';
import {
  useAddRecipeCategories,
  useBottomSheetRef,
  useSelectedCategory,
} from '../../../store/store';

const AddRecipeCategory = () => {
  const {addTitle, setAddTitle} = useAddRecipeCategories();
  const {bottomSheetRef} = useBottomSheetRef();
  const {setSelectedCategory} = useSelectedCategory();
  const handleCategory = () => {
    if (addTitle.foodStyle === '' || addTitle.foodType === '') {
      return;
    }
    setSelectedCategory(addTitle);
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle
          title="카테고리를 선택해주세요"
          onPress={() => {
            setAddTitle({foodStyle: '한식', foodType: ''});
          }}
        />
      </View>
      <View style={styles.selectedContainer}>
        <FoodStyleList addTitle={addTitle} setAddTitle={setAddTitle} />
        <FoodTypeList addTitle={addTitle} setAddTitle={setAddTitle} />
      </View>
      <BottomButton
        title="확인"
        buttonColor={
          addTitle.foodStyle === '' || addTitle.foodType === ''
            ? colors.disabled2
            : colors.primary[1]
        }
        onPress={handleCategory}
      />
    </View>
  );
};

export default AddRecipeCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    paddingTop: FWidth * 22,
    paddingHorizontal: FWidth * 22,
  },

  selectedContainer: {
    paddingHorizontal: FWidth * 19,
    flexGrow: 1,
  },
});
