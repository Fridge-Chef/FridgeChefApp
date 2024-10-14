import {StyleSheet, View} from 'react-native';
import React from 'react';
import {reviewContent} from '../../../../utils/list';
import {FHeight, FWidth} from '../../../../../globalStyle';
import Review from './Review';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from '../../RecRecipe/ListItem/RankButton';
import NoData from './NoData';

type ReviewType = {
  id: number;
  writer: string;
  point: number;
  content: string;
  img: string;
  views: number;
};

const ReviewsComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();

  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };
  const reviews: ReviewType[] | null = [
    {
      id: 1,
      writer: '김민영',
      point: 4,
      content: reviewContent.content,
      img: '',
      views: 3,
    },
    {
      id: 2,
      writer: '김인영',
      point: 3,
      content: reviewContent.content,
      img: 'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=2000&format=webply&optimize=medium',
      views: 5,
    },
    {
      id: 3,
      writer: '김한영',
      point: 5,
      content: reviewContent.content,
      img: '',
      views: 7,
    },
    {
      id: 4,
      writer: '김현영',
      point: 2,
      content: reviewContent.content,
      img: '',
      views: 12,
    },
  ];

  return (
    <View style={styles.container}>
      <RankButton onPress={handleBottomSheetOpen} />
      <View style={styles.listContainer}>
        {reviews.length !== 0 ? (
          reviews.map(item => <Review key={item.id} review={item} />)
        ) : (
          <NoData />
        )}
        {/* <FlatList
          data={reviews}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: FWidth * 120}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Review review={item} />}
        /> */}
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
