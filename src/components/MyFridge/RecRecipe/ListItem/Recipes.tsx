import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import {GetRecipeListType, ListData} from '../../../../type/types';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RankButton from './RankButton';
import {useGetRecommendedRecipeList} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../../store/bottomSheetStore';
import {useRankName} from '../../../../store/rankingStore';
import {useMyIngredientsChecked} from '../../../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RecipesProps = {
  ingredientList: ListData[];
};

const Recipes = ({ingredientList}: RecipesProps) => {
  const ingredients = ingredientList.map(item => item.ingredientName);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {myIngredientsChecked} = useMyIngredientsChecked();
  const {rankName} = useRankName();
  const {setTitle} = useBottomSheetTitle();

  const myIngredients = async () => {
    try {
      const items = await AsyncStorage.getItem('myIngredients');
      if (items) {
        const parsedItems = JSON.parse(items);
        const filteredIngredients = ingredients.filter(
          item => !parsedItems.includes(item),
        );
        setNewIngredients(filteredIngredients);
      } else {
        setNewIngredients(ingredients);
      }
    } catch (error) {
      console.error('Error fetching myIngredients:', error);
      setNewIngredients(ingredients);
    }
  };

  const rankingName = () => {
    switch (rankName) {
      case '최신순':
        return 'LATEST';
      case '별점순':
        return 'RATING';
      case '좋아요순':
        return 'HIT';
      case '재료 많은순':
        return 'MATCH';
      default:
        return 'MATCH';
    }
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetRecommendedRecipeList(newIngredients, 10, rankingName());
  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };

  const handleFetchNextPage = () => {
    console.log('마지막');
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    myIngredients();
    refetch();
  }, [myIngredientsChecked]);

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  const newData = data?.pages.map(page => page.content).flat();
  const uniqueData = Array.from(
    new Map(newData?.map(item => [item.id, item])).values(),
  );
  return (
    <View style={styles.container}>
      <View style={styles.mainListContainer}>
        <RankButton onPress={handleBottomSheetOpen} />
        <FlatList
          style={{marginTop: FWidth * 12}}
          data={uniqueData}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{
            paddingBottom: FWidth * 148,
          }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: GetRecipeListType}) => {
            return (
              <FButton
                buttonStyle="noneStyle"
                onPress={() =>
                  navigation.navigate('recipeDetail', {
                    id: item.id,
                    without: item.without,
                    myIngredients: newIngredients,
                  })
                }>
                <ListItem item={item} refetch={refetch} />
              </FButton>
            );
          }}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator size="large" color={colors.primary[1]} />
            ) : null
          }
          onEndReached={handleFetchNextPage}
        />
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
    paddingHorizontal: FWidth * 22,
  },

  mainListContainer: {
    height: '100%',
  },
});
