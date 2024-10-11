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
      <SubTitleComponent title="보유 재료" color={colors.text} />
      <View style={{position: 'relative'}}>
        <FlatList
          data={list}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemListContainer,
                {
                  position: 'relative',
                },
              ]}>
              <View style={[styles.listItemContainer]} onLayout={onLayout2}>
                {list &&
                  item.ingredients?.map((ingredient: RecipeList) => (
                    <View
                      key={ingredient.ingredient_id}
                      style={[styles.listItem, {backgroundColor: colors.b100}]}>
                      <FText
                        fStyle="M_14"
                        color={
                          selectItems.includes(ingredient.ingredient)
                            ? colors.white
                            : colors.black
                        }
                        text={ingredient.ingredient}
                      />
                    </View>

                    // <FButton
                    //   buttonStyle="menuButton"
                    //   fBStyle={{
                    //     backgroundColor: selectItems.includes(
                    //       ingredient.ingredient,
                    //     )
                    //       ? colors.primary[1]
                    //       : colors.background,
                    //     marginRight: FWidth * 6,
                    //   }}
                    //   key={ingredient.ingredient_id}
                    //   onLayout={onLayout}
                    //   onPress={() => handleIngredientClick(ingredient)}>
                    // </FButton>
                  ))}
              </View>
            </View>
          )}
        />
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
      </View>
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
  },

  listItem: {
    paddingHorizontal: FWidth * 6,
    paddingVertical: FWidth * 4,
    borderRadius: 50,
    marginRight: FWidth * 6,
  },
});
