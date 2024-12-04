import {StyleSheet, View} from 'react-native';
import React from 'react';
import ArrowSubTitle from '../../elements/SubTitle/ArrowSubTitle';
import MyReviewList from './MyReviewList';
import {FWidth} from '../../../../globalStyle';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {MyRecipeReviewsType} from '../../../type/types';

type ReviewType = {
  data: MyRecipeReviewsType[];
  rankName: string;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

const MyReview = ({
  data,
  rankName,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: ReviewType) => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();

  const handleRanking = () => {
    setTitle('나의후기');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <ArrowSubTitle onPress={handleRanking} name={rankName} />
      <MyReviewList
        list={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </View>
  );
};

export default MyReview;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 24,
  },
});
