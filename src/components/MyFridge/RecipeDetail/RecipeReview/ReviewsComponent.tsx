import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import Review from './Review';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from '../../RecRecipe/ListItem/RankButton';
import NoData from './NoData';
import {useGetRecipeDetailReview} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';

type ReviewsComponentProps = {
  title: string;
  boardId: number;
};

const ReviewsComponent = ({title, boardId}: ReviewsComponentProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const {data, isLoading, refetch} = useGetRecipeDetailReview(boardId);
  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };

  useEffect(() => {
    refetch();
  }, [data]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <View style={styles.container}>
      <RankButton onPress={handleBottomSheetOpen} />
      <View style={styles.listContainer}>
        {data?.content.length !== 0 ? (
          data?.content.map(item => (
            <Review key={item.id} review={item} title={title} />
          ))
        ) : (
          <NoData />
        )}
      </View>
    </View>
  );
};

export default ReviewsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },

  listContainer: {
    marginBottom: FHeight * 136,
  },
});
