import {useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import {useGetRecipeBookList} from '../../api/recipeBookQuery';
import {useAddLikeRecipe} from '../../api/recipeQuery';
import Loading from '../../components/elements/Loading';
import ListComponent from '../../components/RecipeBook/ListComponent';
import ListItem from '../../components/RecipeBook/ListItem';
import NoContent from '../../components/RecipeBook/NoContent';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';
import {useRecipeLikeRankName} from '../../store/rankingStore';

const LikePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useRecipeLikeRankName();
  const rankingName = () => {
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
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetRecipeBookList('HIT', 10, rankingName());
  const queryList = useQueryClient();
  const {mutate} = useAddLikeRecipe();
  const handleRanking = () => {
    setTitle('좋아요 랭킹');
    bottomSheetRef.current?.present();
  };

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  const newData = data?.pages.map(page => page.content).flat();
  // console.log(data?.pages);
  // const newData: any = [];
  return (
    <View style={styles.container}>
      {!newData?.length ? (
        <NoContent marginTop={240} title="아직 좋아요가 없어요." />
      ) : (
        <ListComponent
          onPress={handleRanking}
          name={rankName}
          data={newData}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          renderItem={({item}) => (
            <ListItem
              item={item}
              onPress={() =>
                mutate(item.id, {
                  onSuccess: () => {
                    queryList.invalidateQueries({
                      queryKey: ['recommendedRecipeList'],
                    });
                    refetch();
                  },
                })
              }
            />
          )}
        />
      )}
    </View>
  );
};

export default React.memo(LikePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },
});
