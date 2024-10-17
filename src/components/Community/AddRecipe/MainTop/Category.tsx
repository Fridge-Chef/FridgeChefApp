import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';
import AddRecipeBottomArrow from '../../../../utils/Svg/AddRecipeBottomArrow';
import {colors, FWidth} from '../../../../../globalStyle';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';

type CategoryProps = {
  selectedCategory?: {
    foodStyle: string;
    foodType: string;
  };
};

const Category = ({selectedCategory}: CategoryProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const handleCategory = () => {
    setTitle('나의레시피등록');
    bottomSheetRef.current?.present();
  };
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.textAlignContainer}
      onPress={handleCategory}>
      <FText
        fStyle="R_16"
        color={
          selectedCategory?.foodStyle && selectedCategory?.foodType
            ? colors.text
            : colors.b400
        }
        text={
          selectedCategory?.foodStyle && selectedCategory?.foodType
            ? `${selectedCategory.foodStyle}, ${selectedCategory.foodType}`
            : '요리 종류, 요리 유형'
        }
      />
      <AddRecipeBottomArrow />
    </FButton>
  );
};

export default Category;

const styles = StyleSheet.create({
  textAlignContainer: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: FWidth * 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.field,
    paddingHorizontal: FWidth * 12,
    justifyContent: 'space-between',
  },
});
