import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';
import {useRecipeLikeRankName} from '../../store/rankingStore';
import ListItem from '../../components/RecipeBook/ListItem';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';
import {useGetRecipeBookLikeList} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';
import {useAddLikeRecipe} from '../../api/recipeQuery';
import {useQueryClient} from '@tanstack/react-query';

const LikePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useRecipeLikeRankName();
  const {data, isLoading, refetch} = useGetRecipeBookLikeList();
  const queryList = useQueryClient();
  const {mutate} = useAddLikeRecipe();
  const handleRanking = () => {
    setTitle('좋아요 랭킹');
    bottomSheetRef.current?.present();
  };

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent marginTop={240} title="아직 좋아요가 없어요." />
      ) : (
        <ListComponent
          onPress={handleRanking}
          name={rankName}
          data={data.content}
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
