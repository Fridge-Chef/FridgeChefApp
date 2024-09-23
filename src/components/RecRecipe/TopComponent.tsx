import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import {colors, FHeight, fontFamilies, FWidth} from '../../../globalStyle';
import {list} from '../../utils/list';

const TopComponent = () => {
  const [itemHeight, setItemHeight] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    if (itemHeight === 0) {
      setItemHeight(e.nativeEvent.layout.height);

      console.log(e.nativeEvent.layout.height);
    }
  };

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
              <View
                style={[
                  styles.listItemContainer,
                  {maxHeight: itemHeight * 2 + FHeight * 10},
                ]}>
                {item.ingredients.map(ingredient => (
                  <View
                    key={ingredient.ingredient_id}
                    style={[styles.listItem]}
                    onLayout={onLayout}>
                    <Text style={styles.itemText}>{ingredient.ingredient}</Text>
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
    backgroundColor: 'red',
    marginTop: FHeight * 16,
  },

  itemSubContainer: {
    marginVertical: FHeight * -10,
  },

  listItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: FWidth * 500,
    marginTop: FHeight * 10,
  },

  listItem: {
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-start',
    marginTop: FHeight * 10,
    marginRight: FWidth * 8,
  },

  itemText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fontFamilies.pretendardMedium,
  },
});
