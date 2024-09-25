import {
  Dimensions,
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import {list} from '../../utils/list';
import MoreList from '../../utils/Svg/MoreList';
import FButton from '../elements/FButton';
import BottomButton from '../../utils/Svg/BottomButton';
import {RecipeList} from '../../type/types';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import MoreButtonComponent from '../Ingredients/MoreButtonComponent';

const TopComponent = () => {
  const [itemHeight, setItemHeight] = useState(0);
  const [containerOpen, setContainerOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const onLayout = (e: LayoutChangeEvent) => {
    if (itemHeight === 0) {
      setItemHeight(e.nativeEvent.layout.height);
    }
  };

  const onLayout2 = (e: LayoutChangeEvent) => {
    setContainerHeight(e.nativeEvent.layout.height);
  };

  const handleBottomSheetOpen = () => {
    setTitle('재료보기');
    bottomSheetRef.current?.expand();
  };

  useEffect(() => {
    if (list.length > 0) {
    }
  }, [containerHeight]);

  return (
    <View>
      <SubTitleComponent title="보유 재료들" color={colors.subText} />
      <FlatList
        data={list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemListContainer,
              {
                maxHeight: containerOpen ? null : itemHeight * 2 + FWidth * 10,
              },
            ]}>
            <View style={[styles.listItemContainer]} onLayout={onLayout2}>
              {list &&
                item.ingredients?.map((ingredient: RecipeList) => (
                  <View
                    key={ingredient.ingredient_id}
                    style={[styles.listItem]}
                    onLayout={onLayout}>
                    <Text style={[fontStyles.M_14, {color: colors.black}]}>
                      {ingredient.ingredient}
                    </Text>
                  </View>
                ))}
              {item.ingredients.length > 0 && (
                <FButton
                  buttonStyle="noneStyle"
                  onPress={handleBottomSheetOpen}>
                  <View style={{marginTop: FWidth * 10}}>
                    <BottomButton buttonHeight={itemHeight} />
                  </View>
                </FButton>
              )}
            </View>
            {containerHeight > itemHeight * 3 + FWidth * 12 && (
              <MoreButtonComponent
                buttonHeight={itemHeight}
                containerOpen={containerOpen}
                onPress={() => setContainerOpen(!containerOpen)}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  itemListContainer: {
    marginTop: FWidth * 16,
  },

  listItemContainer: {
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FWidth * -10,
  },

  listItem: {
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 6,
    borderRadius: 50,
    backgroundColor: colors.background,
    marginTop: FWidth * 10,
    marginRight: FWidth * 8,
  },
});
