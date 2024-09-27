import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../../globalStyle';
import SubTitleBS from '../SubTitleBS';
import CloseItem from '../CloseItem';

type ItemsComponentProps = {
  title: string;
  itemList: string[];
};

const ItemsComponent = ({title, itemList}: ItemsComponentProps) => {
  return (
    <View style={styles.container}>
      <SubTitleBS title={title} />
      <View style={styles.itemsContainer}>
        <View style={styles.subItemsContainer}>
          {itemList.map((item, index) => (
            <CloseItem key={index} name={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  itemsContainer: {
    marginTop: FWidth * 16,
  },

  subItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FWidth * -10,
  },
});
