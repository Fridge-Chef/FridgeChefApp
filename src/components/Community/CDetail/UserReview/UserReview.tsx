import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, FWidth} from '../../../../../globalStyle';
import TopComponent from './TopComponent';
import UserContent from './UserContent';
import {useGetRecipeReviewDetail} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';
import {RecipeReviewDetailType} from '../../../../type/types';

type RecipeType = {
  params: {
    item: RecipeReviewDetailType;
  };
};

const UserReview = () => {
  const route = useRoute<RouteProp<RecipeType>>();
  const {boardId, id} = route.params.item;
  const {data, isLoading, refetch} = useGetRecipeReviewDetail(boardId, id);

  useEffect(() => {
    refetch();
  }, [data]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <>
      {data && (
        <View style={styles.container}>
          <TopComponent data={data} />
          <UserContent data={data} refetch={refetch} />
        </View>
      )}
    </>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 32,
  },
});
