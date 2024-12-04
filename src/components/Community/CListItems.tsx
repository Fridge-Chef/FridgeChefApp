import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import CListItem from './CListItem';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';
import {useCommunityMyRecipeName} from '../../store/rankingStore';
import {GetMyRecipeListType} from '../../type/types';
import {useGetRecipeList} from '../../api/recipeQuery';
import Loading from '../elements/Loading';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';
import {useQueryClient} from '@tanstack/react-query';

type CListItemsProps = {
  onClick: number;
  scrollOffset: number;
  setScrollOffset: (offset: number) => void;
  setPrevScrollOffset: (offset: number) => void;
};

const CListItems = ({
  onClick,
  scrollOffset,
  setScrollOffset,
  setPrevScrollOffset,
}: CListItemsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useCommunityMyRecipeName();
  const queryReset = useQueryClient();
  const recipeWeek = () => {
    switch (onClick) {
      case 1:
        return 'ALL';
      case 2:
        return 'THIS_WEEK';
      case 3:
        return 'THIS_MONTH';
    }
  };

  const rankingData = () => {
    switch (rankName) {
      case '최신순':
        return 'LATEST';
      case '별점순':
        return 'RATING';
      case '좋아요순':
        return 'HIT';
      default:
        return 'LATEST';
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setScrollOffset(currentOffset);
    setPrevScrollOffset(scrollOffset);
  };
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetRecipeList(10, recipeWeek(), rankingData());

  const handleRanking = () => {
    setTitle('나만의레시피');
    bottomSheetRef.current?.present();
  };
  useEffect(() => {
    refetch();
    queryReset.invalidateQueries({
      queryKey: ['recipeList'],
    });
  }, [rankName, onClick]);

  const recipes = data?.pages.flatMap(page => page?.content) || [];
  const uniqueRecipes = Array.from(
    new Map(recipes.map(item => [item.boardId, item])).values(),
  );
  const handleFetchNextPage = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) return <Loading loadingTitle="검색중" />;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle name={rankName} onPress={handleRanking} />
      </View>
      <FlatList
        data={uniqueRecipes}
        overScrollMode="never"
        onScroll={handleScroll}
        contentContainerStyle={{paddingBottom: FWidth * 20}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.boardId.toString()}
        renderItem={({item}: {item: GetMyRecipeListType}) => (
          <CListItem
            item={item}
            onPress={() =>
              navigation.navigate('reviewDetail', {
                itemId: item.boardId,
              })
            }
          />
        )}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator size="large" color={colors.primary[1]} />
          ) : null
        }
        onEndReached={handleFetchNextPage}
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
