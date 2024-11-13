import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../../../globalStyle';
import Review from './Review';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from '../../RecRecipe/ListItem/RankButton';
import NoData from './NoData';
import {RecipeReviewListType} from '../../../../type/types';

type ReviewsComponentProps = {
  title: string;
  data: RecipeReviewListType | undefined;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    setTitle('순위');
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
