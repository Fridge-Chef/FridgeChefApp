import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import SubTitleBS from '../SubTitleBS';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import ArrowDown from '../../../utils/Svg/ArrowDown';

type CategoriesProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  category: string;
  setCategory: (value: string) => void;
};

const Categories = ({
  isOpen,
  setIsOpen,
  category,
  setCategory,
}: CategoriesProps) => {
  const list = [
    {id: 1, name: '채소류'},
    {id: 2, name: '과일류'},
    {id: 3, name: '육류'},
    {id: 4, name: '해산물'},
    {id: 5, name: '곡류 및 견과류'},
    {id: 6, name: '유제품 및 계란'},
    {id: 7, name: '가공식품'},
    {id: 8, name: '양념 및 조미료'},
    {id: 9, name: '빵 및 곡류 가공품'},
  ];

  const handleSelectItem = (item: string) => {
    setCategory(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <SubTitleBS title="카테고리" />
      <FButton
        marginTop={FWidth * 10}
        buttonStyle="selected"
        fBStyle={styles.buttonAlign}
        onPress={() => setIsOpen(!isOpen)}>
        <FText
          fStyle="M_16"
          color={category !== '미분류' ? colors.black : colors.disabled}
          text={category}
        />
        <ArrowDown />
      </FButton>
      {isOpen && (
        <View style={styles.listContainer}>
          {list.map(item => (
            <FButton
              key={item.id}
              buttonStyle="noneStyle"
              onPress={() => handleSelectItem(item.name)}>
              <FText fStyle="R_16" color={colors.black} text={item.name} />
            </FButton>
          ))}
        </View>
      )}
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
    marginTop: FWidth * 16,
    paddingVertical: FWidth * 8,
    paddingHorizontal: FWidth * 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.field,
  },
});
