import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemBox from './ItemBox';

type ItemsComponentProps = {
  ingredientList: {
    title: string;
  }[];
};

const ItemsComponent = ({ingredientList}: ItemsComponentProps) => {
  return (
    <>
      {ingredientList.map((item, index) => (
        <ItemBox
          key={index}
          title={item.title}
          onPress={() => console.log(item.title)}
        />
      ))}
    </>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({});
