import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {colors, FWidth} from '../../../../globalStyle';
import BottomButton from '../BottomButton';
import {list} from '../../../utils/list';
import IngredientItem from './IngredientItem';
import {RecipeList} from '../../../type/types';

const IngredientList = () => {
  const [selectItems, setSelectItems] = useState<string[]>([]);
  const [deleteItems, setDeleteItems] = useState<string[]>([]);

  const handleIngredientClick = (ingredient: RecipeList) => {
    if (deleteItems.includes(ingredient.ingredient)) {
      return;
    }

    if (selectItems.includes(ingredient.ingredient)) {
      setSelectItems(
        selectItems.filter(item => item !== ingredient.ingredient),
      );
    } else {
      setSelectItems([...selectItems, ingredient.ingredient]);
    }
  };

  const handleDeleteClick = (ingredient: RecipeList) => {
    if (selectItems.includes(ingredient.ingredient)) {
      return;
    }

    if (deleteItems.includes(ingredient.ingredient)) {
      setDeleteItems(
        deleteItems.filter(item => item !== ingredient.ingredient),
      );
    } else {
      setDeleteItems([...deleteItems, ingredient.ingredient]);
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
      <View style={styles.contentContainer}>
        <TopTitle title="주재료 선택하기" />
        {list.map((item, index) => (
          <View key={index} style={styles.itemsContainer}>
            {item.ingredients.map((item, index) => {
              const {backColor, iColor, tColor, bWidth, pVer, pHor} =
                getItemStyle(item.ingredient);
              return (
                <IngredientItem
                  key={index}
                  iColor={iColor}
                  tColor={tColor}
                  bWidth={bWidth}
                  backColor={backColor}
                  pVer={pVer}
                  pHor={pHor}
                  ingredients={item.ingredient}
                  onPress={() => handleIngredientClick(item)}
                  deleteOnPress={() => handleDeleteClick(item)}
                />
              );
            })}
          </View>
        ))}
      </View>
      <BottomButton
        title="다음"
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

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
  },

  itemsContainer: {
    marginTop: FWidth * 32,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
