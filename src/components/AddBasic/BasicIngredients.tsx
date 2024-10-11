import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../globalStyle';
import SubTitleBS from '../BottomSheet/SubTitleBS';
import BasicCloseItem from './BasicCloseItem';

type BasicIngredientsProps = {
  initialItems: {
    items: string[];
  };
  setBasicItem: (value: {items: string[]}) => void;
};

const BasicIngredients = ({
  initialItems,
  setBasicItem,
}: BasicIngredientsProps) => {
  const handleRemoveItem = (itemToRemove: string) => {
    const updatedItems = initialItems.items.filter(
      item => item !== itemToRemove,
    );
    setBasicItem({items: updatedItems});
  };

  return (
    <View style={styles.container}>
      <SubTitleBS title="기본 재료들" />
      <View style={styles.listContainer}>
        {initialItems.items.map((item, index) => (
          <BasicCloseItem
            key={index}
            item={item}
            onPress={() => handleRemoveItem(item)}
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
