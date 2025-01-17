import React from 'react';
import {StyleSheet} from 'react-native';
import ItemBox from './ItemBox';

type ItemsComponentProps = {
  list: string[];
};

const ItemsComponent = ({list}: ItemsComponentProps) => {
  return (
    <>
      {list.map((item, index) => (
        <ItemBox key={index} title={item} />
      ))}
    </>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({});
