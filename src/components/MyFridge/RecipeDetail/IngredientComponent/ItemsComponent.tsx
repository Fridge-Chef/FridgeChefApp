import React from 'react';
import {StyleSheet} from 'react-native';
import ItemBox from './ItemBox';

type ItemsComponentProps = {
  recipeIngredients: {
    name: string;
    details?: string;
  }[];
};

const ItemsComponent = ({recipeIngredients}: ItemsComponentProps) => {
  return (
    <>
      {recipeIngredients.map((item, index) => (
        <ItemBox
          key={index}
          title={item.name}
          quantity={item.details ? item.details : ''}
        />
      ))}
    </>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({});
