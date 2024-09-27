import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../../components/elements/FText';
import ScoreList from './ScoreList';

type ReviewDataProps = {
  reviewData: {
    id: number;
    reviewPoint: number;
    reviewContent: string;
    reviewImg: string;
  };

  setReviewData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      reviewPoint: number;
      reviewContent: string;
      reviewImg: string;
    }>
  >;
};

const AddScore = ({reviewData, setReviewData}: ReviewDataProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="M_16" color={colors.text} text={'제목 적는곳'} />
      <ScoreList reviewData={reviewData} setReviewData={setReviewData} />
    </View>
  );
};

export default AddScore;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.b200,
    paddingVertical: FWidth * 20,
    borderRadius: 14,
  },
});
