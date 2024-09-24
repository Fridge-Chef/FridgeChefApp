import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import {list} from '../../utils/list';

const TopComponent = () => {
  const [itemHeight, setItemHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => {
    if (itemHeight === 0) {
      console.log('아이템 ', e.nativeEvent.layout.height);
      setItemHeight(e.nativeEvent.layout.height);
    }
  };

  const onLayout2 = (e: LayoutChangeEvent) => {
    console.log('컨테이너', e.nativeEvent.layout.height);
    setContainerHeight(e.nativeEvent.layout.height);
  };

  useEffect(() => {
    if (list.length > 0) {
    }
  }, [containerHeight]);

  return (
    <View>
      <SubTitleComponent title="보유 재료들" color={colors.subText} />
      <View style={styles.itemListContainer}>
        <View style={styles.itemSubContainer}>
          <FlatList
            data={list}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <View style={[styles.listItemContainer]} onLayout={onLayout2}>
                {item.ingredients.map(ingredient => (
                  <View
                    key={ingredient.ingredient_id}
                    style={[styles.listItem]}
                    onLayout={onLayout}>
                    <Text style={[fontStyles.M_14, {color: colors.black}]}>
                      {ingredient.ingredient}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  itemListContainer: {
    marginTop: FHeight * 16,
  },

  itemSubContainer: {
    backgroundColor: 'red',
  },

  listItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: FWidth * 500,
    marginTop: FHeight * -10,
  },

  listItem: {
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    marginTop: FHeight * 10,
    marginRight: FWidth * 8,
  },
});
