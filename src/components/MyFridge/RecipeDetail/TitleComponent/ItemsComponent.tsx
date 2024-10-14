import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemBox from './ItemBox';

type ItemsComponentProps = {
  list: {
    name: string;
    quantity: string;
  }[];
};

const ItemsComponent = ({list}: ItemsComponentProps) => {
  return (
    <>
      {list.map((item, index) => (
        <ItemBox key={index} title={item.name} />
      ))}
    </>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({});
