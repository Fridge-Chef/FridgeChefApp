import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import SubTitleBS from '../SubTitleBS';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import ArrowDown from '../../../utils/Svg/ArrowDown';
import Bowl from '../../../utils/Svg/Bowl';
import Category from './Category';
import {categoryList} from '../../../utils/list';

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
      <SubTitleBS title="카테고리 선택" />
      <View style={styles.listContainer}>
        {categoryList.map(item => (
          <Category
            key={item.id}
            width={itemNumber === item.id ? FWidth * 78 : FWidth * 78}
            height={itemNumber === item.id ? FWidth * 78 : FWidth * 78}
            borderColor={
              itemNumber === item.id ? colors.primary[1] : 'transparent'
            }
            borderWidth={itemNumber === item.id ? 1.6 : 0}
            buttonColor={
              itemNumber === item.id ? colors.white : colors.background
            }
            name={item.name}
            nameColor={itemNumber === item.id ? colors.primary[1] : colors.b600}
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
    marginTop: FWidth * 32,
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
