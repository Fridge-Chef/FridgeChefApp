import {FlatList, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import {colors, FWidth} from '../../../../globalStyle';
import {list} from '../../../utils/list';
import FButton from '../../elements/FButton';
import BottomButton from '../../../utils/Svg/BottomButton';
import {RecipeList} from '../../../type/types';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../store/store';
import FText from '../../elements/FText';

const TopComponent = () => {
  const [itemHeight, setItemHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const [selectItems, setSelectItems] = useState<string[]>([]);
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

  const handleIngredientClick = (ingredient: RecipeList) => {
    if (selectItems.includes(ingredient.ingredient)) {
      setSelectItems(
        selectItems.filter(item => item !== ingredient.ingredient),
      );
    } else {
      setSelectItems([...selectItems, ingredient.ingredient]);
    }
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
                position: 'relative',
                maxHeight: itemHeight * 2 + FWidth * 10,
              },
            ]}>
            <View style={[styles.listItemContainer]} onLayout={onLayout2}>
              {list &&
                item.ingredients?.map((ingredient: RecipeList) => (
                  <FButton
                    buttonStyle="menuButton"
                    fBStyle={{
                      backgroundColor: selectItems.includes(
                        ingredient.ingredient,
                      )
                        ? colors.primary[1]
                        : colors.background,
                      marginTop: FWidth * 10,
                      marginRight: FWidth * 8,
                    }}
                    key={ingredient.ingredient_id}
                    onLayout={onLayout}
                    onPress={() => handleIngredientClick(ingredient)}>
                    <FText
                      fStyle="M_14"
                      color={
                        selectItems.includes(ingredient.ingredient)
                          ? colors.white
                          : colors.black
                      }
                      text={ingredient.ingredient}
                    />
                  </FButton>
                ))}
            </View>
            {item.ingredients.length > 0 && (
              <FButton
                buttonStyle="noneStyle"
                fBStyle={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                }}
                onPress={handleBottomSheetOpen}>
                <View
                  style={{
                    marginTop: FWidth * 10,
                    backgroundColor: colors.background,
                    borderRadius: FWidth * 50,
                    elevation: 2,
                  }}>
                  <BottomButton buttonHeight={itemHeight} />
                </View>
              </FButton>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: FWidth * -10,
  },
});
