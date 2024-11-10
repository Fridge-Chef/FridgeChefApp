import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import CloseItem from './CloseItem';
import SubTitleBS from './SubTitleBS';
import {ListData} from '../../type/types';

type ItemListProps = {
  isClicked: number;
  itemList: ListData[];
  setItemList: React.Dispatch<React.SetStateAction<ListData[]>>;
  title: string;
};

const ItemList = ({isClicked, itemList, setItemList, title}: ItemListProps) => {
  const handleRemoveItem = (item: string) => {
    setItemList(
      itemList.filter((listItem: ListData) => listItem.ingredientName !== item),
    );
  };

  return (
    <View>
      {itemList.length > 0 && (
        <View style={styles.itemContainer}>
          {isClicked === 1 ? (
            itemList.filter(item => item.storage === 'REFRIGERATION').length >
            0 ? (
              <SubTitleBS title={title} />
            ) : null
          ) : itemList.filter(item => item.storage === 'TEMPERATURE').length >
            0 ? (
            <SubTitleBS title={title} />
          ) : null}
          <View style={styles.itemListContainer}>
            <View style={styles.itemSubContainer}>
              {isClicked === 1
                ? itemList
                    .filter(item => item.storage === 'REFRIGERATION')
                    .map((item, index) => (
                      <CloseItem
                        key={index}
                        name={item.ingredientName}
                        onPress={() => handleRemoveItem(item.ingredientName)}
                      />
                    ))
                : itemList
                    .filter(item => item.storage === 'TEMPERATURE')
                    .map((item, index) => (
                      <CloseItem
                        key={index}
                        name={item.ingredientName}
                        onPress={() => handleRemoveItem(item.ingredientName)}
                      />
                    ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: FWidth * 32,
  },

  itemListContainer: {
    marginTop: FWidth * 16,
  },

  itemSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FWidth * -10,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  listItemIconContainer: {
    width: FWidth * 20,
    height: FWidth * 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: FWidth * 4,
  },
});
