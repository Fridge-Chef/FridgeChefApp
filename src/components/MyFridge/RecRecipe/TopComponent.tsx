import {FlatList, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import {list} from '../../../utils/list';
import FButton from '../../elements/FButton';
import BottomButton from '../../../utils/Svg/BottomButton';
import {RecipeList} from '../../../type/types';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../store/store';
import FText from '../../elements/FText';
import SubTitle from '../../elements/SubTitle/SubTitle';
import RecipeRightArrow from '../../../utils/Svg/Categories/RecipeRightArrow';

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
    bottomSheetRef.current?.present();
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
      <SubTitle title="보유 재료" />
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
              <View style={[styles.listItemContainer]}>
                {list &&
                  item.ingredients?.map((ingredient: RecipeList) => (
                    <View
                      key={ingredient.ingredient_id}
                      style={[styles.listItem, {backgroundColor: colors.b100}]}
                      onLayout={onLayout}>
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
              // height: '100%',
              alignItems: 'center',
              backgroundColor: colors.white,
            }}>
            {/* <BottomButton buttonHeight={itemHeight} /> */}
            <RecipeRightArrow />
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
    alignItems: 'center',
  },

  listItem: {
    paddingHorizontal: FWidth * 6,
    paddingVertical: FWidth * 4,
    borderRadius: 50,
    marginRight: FWidth * 6,
  },
});
