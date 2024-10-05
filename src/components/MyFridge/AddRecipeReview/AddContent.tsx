import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../../globalStyle';
import FInput from '../../elements/FInput';

type AddContentProps = {
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

const AddContent = ({reviewData, setReviewData}: AddContentProps) => {
  return (
    <View style={styles.container}>
      <FInput
        value={reviewData.reviewContent}
        inputStyle="noBorder"
        multiline
        onChangeText={text => {
          setReviewData({...reviewData, reviewContent: text});
        }}
      />
    </View>
  );
};

export default AddContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
  },
});
