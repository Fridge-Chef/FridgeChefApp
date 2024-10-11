import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import Category from './Category';
import {categoryList} from '../../../utils/list';
import SubTitleBS2 from '../SubTitleBS2';

type CategoriesProps = {
  itemNumber: number;
  setItemNumber: (value: number) => void;
  setCategory: (value: string) => void;
};

const Categories = ({
  itemNumber,
  setItemNumber,
  setCategory,
}: CategoriesProps) => {
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
            onPress={() => {
              setCategory(item.name);
              setItemNumber(item.id);
            }}>
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
