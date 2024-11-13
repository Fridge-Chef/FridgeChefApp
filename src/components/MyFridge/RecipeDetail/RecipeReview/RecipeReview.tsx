import {Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import TitleComponent from './TitleComponent';
import ReviewsComponent from './ReviewsComponent';
import {useGetRecipeDetailReview} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';

type RecipeReviewProps = {
  boardId: number;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};

const RecipeReview = ({
  title,
  boardId,
  menuOpen,
  setMenuOpen,
}: RecipeReviewProps) => {
  const {data, isLoading, refetch} = useGetRecipeDetailReview(boardId);

  useEffect(() => {
    refetch();
  }, [data]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <View style={styles.container}>
      <TitleComponent title={title} data={data} boardId={boardId} />
      <ReviewsComponent
        title={title}
        data={data}
        refetch={refetch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </View>
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
