import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FWidth} from '../../../globalStyle';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';
import {useCommunityMyRecipeName} from '../../store/rankingStore';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import {getRecipeList} from '../../api/recipe';
import {GetRecipeListType, RecipeListType} from '../../type/types';

type CListItemsProps = {
  scrollOffset: number;
  setScrollOffset: (offset: number) => void;
  setPrevScrollOffset: (offset: number) => void;
};

const CListItems = ({
  scrollOffset,
  setScrollOffset,
  setPrevScrollOffset,
}: CListItemsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useCommunityMyRecipeName();
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setScrollOffset(currentOffset);
    setPrevScrollOffset(scrollOffset);
  };

  const [recipeList, setRecipeList] = useState<GetRecipeListType[]>([]);

  const getRecipes = async () => {
    const list = await getRecipeList();
    console.log(list?.data.content);
    setRecipeList(list?.data.content);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const handleRanking = () => {
    setTitle('나만의레시피');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle name={rankName} onPress={handleRanking} />
      </View>
      <FlatList
        data={recipeList}
        overScrollMode="never"
        onScroll={handleScroll}
        contentContainerStyle={{paddingBottom: FWidth * 20}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.boardId.toString()}
        renderItem={({item}: {item: GetRecipeListType}) => (
          <CListItem
            item={item}
            onPress={() =>
              navigation.navigate('reviewDetail', {
                item,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default CListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
  },

  titleContainer: {
    marginBottom: FWidth * 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
