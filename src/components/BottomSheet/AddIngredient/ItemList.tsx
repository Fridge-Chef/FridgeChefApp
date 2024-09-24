import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import SvgImage from '../../elements/SvgImage';

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
          <Text style={[fontStyles.B_14, {color: colors.subText}]}>
            등록된 재료들
          </Text>
          <View style={styles.itemListContainer}>
            {itemList.map((item, index) => (
              <FButton
                key={index}
                buttonStyle="iconButton2"
                buttonColor={colors.background}
                marginRight={8}
                marginBottom={8}>
                <View style={styles.listItem}>
                  <Text style={[fontStyles.M_16, {color: colors.black}]}>
                    {item}
                  </Text>
                  <View style={{marginLeft: FWidth * 4}}>
                    <FButton
                      buttonStyle="noneStyle"
                      onPress={() => handleRemoveItem(item)}>
                      <SvgImage type="close2" width={18} height={18} />
                    </FButton>
                  </View>
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
    marginTop: FHeight * 32,
  },

  itemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FHeight * 16,
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
