import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FHeight, FWidth} from '../../../../../globalStyle';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../../store/bottomSheetStore';
import {RecipeReviewListType} from '../../../../type/types';
import RankButton from '../../RecRecipe/ListItem/RankButton';
import NoData from './NoData';
import Review from './Review';

type ReviewsComponentProps = {
  title: string;
  data?: RecipeReviewListType;
  menuOpen: boolean | number;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number>>;
  refetch: () => void;
};

const ReviewsComponent = ({
  title,
  data,
  refetch,
  menuOpen,
  setMenuOpen,
}: ReviewsComponentProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const handleBottomSheetOpen = () => {
    setTitle('좋아요 랭킹');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <RankButton onPress={handleBottomSheetOpen} />
      <View style={styles.listContainer}>
        {data?.content.length !== 0 ? (
          data?.content.map(item => (
            <Review
              key={item.id}
              review={item}
              title={title}
              refetch={refetch}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
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
