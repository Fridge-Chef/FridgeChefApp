import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import CloseItem from './CloseItem';
import SubTitleBS from './SubTitleBS';

type ItemListProps = {
  itemList: string[];
  setItemList: React.Dispatch<React.SetStateAction<string[]>>;
  title: string;
};

const ItemList = ({itemList, setItemList, title}: ItemListProps) => {
  const handleRemoveItem = (item: string) => {
    setItemList(prev => prev.filter(i => i !== item));
  };

  return (
    <View>
      {itemList.length > 0 && (
        <View style={styles.itemContainer}>
          <SubTitleBS title={title} />
          <View style={styles.itemListContainer}>
            <View style={styles.itemSubContainer}>
              {itemList.map((item, index) => (
                <CloseItem
                  key={index}
                  name={item}
                  onPress={() => handleRemoveItem(item)}
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
