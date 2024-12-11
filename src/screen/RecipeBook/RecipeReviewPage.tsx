import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import MyReview from '../../components/RecipeBook/MyReview/MyReview';
import {useMyRecipeReviews} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';
import {useMyReviewRankName} from '../../store/rankingStore';
import {MyRecipeReviewsType} from '../../type/types';

type ReviewType = {
  content: MyRecipeReviewsType[];
};

const RecipeReviewPage = () => {
  const {rankName} = useMyReviewRankName();

  const rankNameList = () => {
    switch (rankName) {
      case '최신순':
        return 'LATEST';
      case '별점순':
        return 'RATING';
      case '좋아요순':
        return 'HIT';
      default:
        return '최신순';
    }
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useMyRecipeReviews(10, rankNameList());
  const newData = data?.pages.map((page: ReviewType) => page.content).flat();

  useEffect(() => {
    refetch();
  }, [data]);

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      {data?.pages.length! <= 0 ? (
        <NoContent
          marginTop={240}
          title="첫번째 후기를 남겨보세요"
          buttonTitle="후기 작성하기"
        />
      ) : (
        newData && (
          <MyReview
            data={newData}
            rankName={rankName}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )
      )}
    </View>
  );
};

export default React.memo(RecipeReviewPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },
});
