import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ArrowSubTitle from '../../elements/SubTitle/ArrowSubTitle';
import MyReviewList from './MyReviewList';
import {useMyReviewRankName} from '../../../store/rankingStore';
import {FWidth} from '../../../../globalStyle';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';

type ReviewType = {
  boardId: number;
  username: string;
  star: number;
  createdAt: string;
  title: string;
  comments: string;
  imageLink: string[];
  like: number;
};

const MyReview = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useMyReviewRankName();
  const reviews: ReviewType[] | null = [
    {
      boardId: 1,
      username: '김민영',
      star: 4,
      title: '닭가슴살 어쩌구',
      comments: 'reviewContent.content',
      imageLink: [''],
      createdAt: '2021-09-01',
      like: 3,
    },
    {
      boardId: 2,
      username: '김인영',
      star: 3,
      title: '닭가슴살 어쩌구',
      comments: 'reviewContent.content',
      createdAt: '2021-09-01',
      imageLink: [
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=2000&format=webply&optimize=medium',
      ],
      like: 5,
    },
    {
      boardId: 3,
      username: '김한영',
      star: 5,
      title: '닭가슴살 어쩌구',
      comments: 'reviewContent.content',
      createdAt: '2021-09-01',
      imageLink: [''],
      like: 7,
    },
    {
      boardId: 4,
      username: '김현영',
      star: 2,
      title: '닭가슴살 어쩌구',
      comments: 'reviewContent.content',
      createdAt: '2021-09-01',
      imageLink: [''],
      like: 12,
    },
  ];

  const handleRanking = () => {
    setTitle('나의후기');
    bottomSheetRef.current?.present();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <ArrowSubTitle onPress={handleRanking} name={rankName} />
      <MyReviewList list={reviews} />
    </ScrollView>
  );
};

export default MyReview;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 24,
  },
});
