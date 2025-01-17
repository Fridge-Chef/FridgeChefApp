import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../globalStyle';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {MyRecipeReviewsType} from '../../../type/types';
import ArrowSubTitle from '../../elements/SubTitle/ArrowSubTitle';
import MyReviewList from './MyReviewList';

type ReviewType = {
  data: MyRecipeReviewsType[];
  rankName: string;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  menuOpen: boolean | number | null;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number | null>>;
};

const MyReview = ({
  data,
  rankName,
  menuOpen,
  setMenuOpen,
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
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
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
