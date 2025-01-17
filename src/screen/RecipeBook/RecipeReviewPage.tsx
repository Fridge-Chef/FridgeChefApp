import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import {useMyRecipeReviews} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';
import MyReview from '../../components/RecipeBook/MyReview/MyReview';
import NoContent from '../../components/RecipeBook/NoContent';
import {useMyReviewRankName} from '../../store/rankingStore';
import {MyRecipeReviewsType} from '../../type/types';

type ReviewType = {
  content: MyRecipeReviewsType[];
};

const RecipeReviewPage = () => {
  const {rankName} = useMyReviewRankName();
  const [menuOpen, setMenuOpen] = useState<boolean | number | null>(false);
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
  console.log('data', newData);
  useEffect(() => {
    refetch();
  }, [data]);

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <Pressable style={styles.container} onPress={() => setMenuOpen(false)}>
      {newData?.length === 0 ? (
        <NoContent
          marginTop={240}
          title="첫번째 후기를 남겨보세요"
          // buttonTitle="후기 작성하기"
        />
      ) : (
        newData && (
          <MyReview
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            data={newData}
            rankName={rankName}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )
      )}
    </Pressable>
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
