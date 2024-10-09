import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemBox from './ItemBox';

type ItemsComponentProps = {
  ingredientList: {
    name: string;
    quantity?: string;
  }[];
};

const ItemsComponent = ({ingredientList}: ItemsComponentProps) => {
  return (
    <>
      {ingredientList.map((item, index) => (
        <ItemBox
          key={index}
          title={item.name}
          quantity={item.quantity}
          onPress={() => console.log(item.name)}
        />
      ))}
    </>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({});
