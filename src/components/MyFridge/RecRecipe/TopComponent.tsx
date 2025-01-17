import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {FlatList, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {useMyIngredientsChecked} from '../../../store/store';
import {ListData} from '../../../type/types';
import RecipeRightArrow from '../../../utils/Svg/Categories/RecipeRightArrow';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import SubTitle from '../../elements/SubTitle/SubTitle';

type TopComponentProps = {
  ingredients: ListData[];
  setIngredientList?: (value: ListData[]) => void;
};

const TopComponent = ({ingredients}: TopComponentProps) => {
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [itemHeight, setItemHeight] = useState(0);
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const {myIngredientsChecked} = useMyIngredientsChecked();
  const [selectItems, setSelectItems] = useState<string[]>([]);
  const onLayout = (e: LayoutChangeEvent) => {
    if (itemHeight === 0) {
      setItemHeight(e.nativeEvent.layout.height);
    }
  };
  const handleBottomSheetOpen = () => {
    setTitle('재료보기');
    bottomSheetRef.current?.present();
  };

  const myIngredients = async () => {
    try {
      const items = await AsyncStorage.getItem('myIngredients');
      const firstItems = await AsyncStorage.getItem('firstIngredients');
      let filteredIngredients = ingredients;
      if (items) {
        const parsedItems = JSON.parse(items);
        filteredIngredients = ingredients.filter(
          item => !parsedItems.includes(item.ingredientName),
        );
      }
      if (firstItems && firstItems !== '[]') {
        console.log('하이');
        const parsedFirstItems = JSON.parse(firstItems);
        setSelectItems(parsedFirstItems);

        const sortedIngredients = [
          ...filteredIngredients.filter(item =>
            parsedFirstItems.includes(item.ingredientName),
          ),
          ...filteredIngredients.filter(
            item => !parsedFirstItems.includes(item.ingredientName),
          ),
        ];

        setNewIngredients(sortedIngredients);
      } else {
        setNewIngredients(filteredIngredients);
      }
    } catch (error) {
      console.error('Error fetching myIngredients:', error);
      setNewIngredients(ingredients);
    }
  };

  useEffect(() => {
    myIngredients();
  }, [myIngredientsChecked]);

  return (
    <View style={styles.container}>
      <SubTitle title="보유 재료" />
      <View style={{position: 'relative'}}>
        <FlatList
          data={newIngredients}
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
                <View
                  style={[
                    styles.listItem,
                    {
                      backgroundColor: selectItems.includes(item.ingredientName)
                        ? colors.text
                        : colors.b100,
                    },
                  ]}
                  onLayout={onLayout}>
                  <FText
                    fStyle="M_14"
                    color={
                      selectItems.includes(item.ingredientName)
                        ? colors.white
                        : colors.black
                    }
                    text={item.ingredientName}
                  />
                </View>
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
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}>
            <RecipeRightArrow />
          </View>
        </FButton>
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: FHeight * 24,
    paddingHorizontal: FWidth * 22,
  },

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
