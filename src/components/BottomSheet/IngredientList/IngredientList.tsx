import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {colors, FWidth} from '../../../../globalStyle';
import BottomButton from '../BottomButton';
import IngredientItem from './IngredientItem';
import {ListData, RecipeList} from '../../../type/types';
import {useIngredientList} from '../../../store/store';

const IngredientList = () => {
  const [selectItems, setSelectItems] = useState<string[]>([]);
  const [deleteItems, setDeleteItems] = useState<string[]>([]);
  const {ingredientList} = useIngredientList();
  const handleIngredientClick = (ingredient: ListData) => {
    if (deleteItems.includes(ingredient.ingredientName)) {
      return;
    }

    if (selectItems.includes(ingredient.ingredientName)) {
      setSelectItems(
        selectItems.filter(item => item !== ingredient.ingredientName),
      );
    } else {
      setSelectItems([...selectItems, ingredient.ingredientName]);
    }
  };

  const handleDeleteClick = (ingredient: ListData) => {
    if (selectItems.includes(ingredient.ingredientName)) {
      return;
    }

    if (deleteItems.includes(ingredient.ingredientName)) {
      setDeleteItems(
        deleteItems.filter(item => item !== ingredient.ingredientName),
      );
    } else {
      setDeleteItems([...deleteItems, ingredient.ingredientName]);
    }
  };

  const getItemStyle = (ingredient: string) => {
    const isSelected = selectItems.includes(ingredient);
    const isDeleted = deleteItems.includes(ingredient);
    return {
      iColor: isSelected
        ? colors.white
        : isDeleted
        ? colors.disabled
        : colors.black,
      tColor: isSelected
        ? colors.white
        : isDeleted
        ? colors.disabled
        : colors.black,
      backColor: isSelected
        ? colors.text
        : isDeleted
        ? colors.white
        : colors.background,
      bWidth: isDeleted ? FWidth * 1 : 0,
      pVer: isDeleted ? FWidth * 8 : FWidth * 9,
      pHor: isDeleted ? FWidth * 11 : FWidth * 12,
      iconClose: isSelected ? false : true,
    };
  };

  const handleSubmit = async () => {
    if (selectItems.length > 0 || deleteItems.length > 0) {
      console.log('확인');
    } else {
      console.log('취소');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <TopTitle title="주재료 선택하기" onPress={() => {}} />
        <View style={styles.contentContainer}>
          {ingredientList.map((item, index) => {
            const {backColor, iColor, tColor, bWidth, pVer, pHor, iconClose} =
              getItemStyle(item.ingredientName);
            return (
              <IngredientItem
                key={index}
                iColor={iColor}
                tColor={tColor}
                bWidth={bWidth}
                backColor={backColor}
                closeIcon={iconClose}
                pVer={pVer}
                pHor={pHor}
                ingredients={item.ingredientName}
                onPress={() => handleIngredientClick(item)}
                deleteOnPress={() => handleDeleteClick(item)}
              />
            );
          })}
        </View>
      </View>
      <BottomButton
        title="확인"
        buttonColor={
          selectItems.length > 0 || deleteItems.length > 0
            ? colors.primary[1]
            : colors.disabled
        }
        onPress={handleSubmit}
      />
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: FWidth * 22,
  },

  paddingContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
  },

  contentContainer: {
    marginTop: FWidth * 32,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: FWidth * 8,
  },
});
