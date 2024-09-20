import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, fontFamilies, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import Icon from 'react-native-vector-icons/Ionicons';

type ItemListProps = {
  itemList: string[];
  setItemList: React.Dispatch<React.SetStateAction<string[]>>;
};

const ItemList = ({itemList, setItemList}: ItemListProps) => {
  const handleRemoveItem = (item: string) => {
    setItemList(prev => prev.filter(i => i !== item));
  };

  return (
    <View>
      {itemList.length > 0 && (
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitleText}>등록된 재료들</Text>
          <View style={styles.itemListContainer}>
            {itemList.map((item, index) => (
              <FButton
                key={index}
                buttonStyle="iconButton2"
                buttonColor="#F9F9F9"
                marginRight={8}
                marginBottom={8}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemText}>{item}</Text>
                  <FButton
                    buttonStyle="noneStyle"
                    onPress={() => handleRemoveItem(item)}>
                    <View style={styles.listItemIconContainer}>
                      <Icon name="close-outline" size={20} color="black" />
                    </View>
                  </FButton>
                </View>
              </FButton>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: FHeight * 44,
  },

  itemTitleText: {
    fontFamily: fontFamilies.pretendardBold,
    color: '#545559',
  },

  itemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FHeight * 12,
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

  listItemText: {
    color: 'black',
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: 16,
  },
});
