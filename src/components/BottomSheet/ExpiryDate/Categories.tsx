import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import Category from './Category';
import {categoryList} from '../../../utils/list';
import SubTitleBS2 from '../SubTitleBS2';

type CategoriesProps = {
  itemNumber: number;
  ingredientData: string | undefined;
  setItemNumber: (value: number) => void;
  setCategory: (value: string) => void;
};

const Categories = ({
  itemNumber,
  ingredientData,
  setItemNumber,
  setCategory,
}: CategoriesProps) => {
  const handlePress = (itemId: number, itemName: string) => {
    if (itemNumber === itemId) {
      // 이미 선택된 상태라면 미선택 상태로 전환
      setItemNumber(-1);
      setCategory('');
    } else {
      // 선택되지 않은 상태라면 선택
      setItemNumber(itemId);
      setCategory(itemName);
    }
  };

  useEffect(() => {
    if (ingredientData) {
      const matchedCategory = categoryList.find(
        item => item.name === ingredientData,
      );

      if (matchedCategory) {
        setItemNumber(matchedCategory.id);
        setCategory(matchedCategory.name);
      }
    }
  }, [ingredientData, setItemNumber, setCategory]);

  return (
    <View style={styles.container}>
      <SubTitleBS2 title="카테고리 선택" />
      <View style={styles.listContainer}>
        {categoryList.map(item => (
          <Category
            key={item.id}
            width={itemNumber === item.id ? FWidth * 78 : FWidth * 78}
            height={itemNumber === item.id ? FWidth * 78 : FWidth * 78}
            borderColor={
              itemNumber === item.id ? colors.primary[1] : 'transparent'
            }
            borderWidth={itemNumber === item.id ? 2.4 : 0}
            buttonColor={
              itemNumber === item.id ? colors.white : colors.background
            }
            fontSize={itemNumber === item.id ? 'B_14' : 'M_14'}
            name={item.name}
            nameColor={itemNumber === item.id ? colors.primary[1] : colors.text}
            onPress={() => handlePress(item.id, item.name)}>
            {itemNumber === item.id ? item.icon2 : item.icon}
          </Category>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 40,
  },

  buttonAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listContainer: {
    marginTop: FWidth * 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
