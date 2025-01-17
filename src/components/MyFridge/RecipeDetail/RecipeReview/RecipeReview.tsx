import React, {useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {useGetRecipeDetailReviewList} from '../../../../api/commentReviewQuery';
import Loading from '../../../elements/Loading';
import ReviewsComponent from './ReviewsComponent';
import TitleComponent from './TitleComponent';

type RecipeReviewProps = {
  boardId: number;
  menuOpen: boolean | number;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number>>;
  title: string;
};

const RecipeReview = ({
  boardId,
  menuOpen,
  setMenuOpen,
  title,
}: RecipeReviewProps) => {
  const {data, isLoading, refetch} = useGetRecipeDetailReviewList(boardId);

  useEffect(() => {
    refetch();
  }, [isLoading]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <Pressable style={styles.container}>
      <TitleComponent title={title} data={data} boardId={boardId} />
      <ReviewsComponent
        title={title}
        data={data}
        refetch={refetch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </Pressable>
  );
};

export default RecipeReview;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 24,
    backgroundColor: colors.white,
  },
});
