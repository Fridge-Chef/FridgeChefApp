import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../globalStyle';
import SubTitleBS from '../BottomSheet/SubTitleBS';
import BasicCloseItem from './BasicCloseItem';

type BasicIngredientsProps = {
  initialItems: {
    ingredientName: string;
    storage: string;
  }[];

  setBasicItem: (value: {ingredientName: string; storage: string}[]) => void;
};

const BasicIngredients = ({
  initialItems,
  setBasicItem,
}: BasicIngredientsProps) => {
  const handleRemoveItem = (itemToRemove: string) => {
    const updatedItems = initialItems.filter(
      item => item.ingredientName !== itemToRemove,
    );
    setBasicItem(updatedItems);
  };

  return (
    <View style={styles.container}>
      <SubTitleBS title="기본 재료들" />
      <View style={styles.listContainer}>
        {initialItems.map((item, index) => (
          <BasicCloseItem
            key={index}
            item={item.ingredientName}
            onPress={() => handleRemoveItem(item.ingredientName)}
          />
        ))}
      </View>
    </View>
  );
};

export default BasicIngredients;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
