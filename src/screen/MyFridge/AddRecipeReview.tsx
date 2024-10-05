import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../globalStyle';
import AddImage from '../../components/MyFridge/AddRecipeReview/AddImage';
import AddScore from '../../components/MyFridge/AddRecipeReview/AddScore';
import AddContent from '../../components/MyFridge/AddRecipeReview/AddContent';
import ImageView from '../../components/MyFridge/AddRecipeReview/ImageView';

const AddRecipeReview = () => {
  const [reviewData, setReviewData] = useState({
    id: 1,
    reviewPoint: 0,
    reviewContent: '',
    reviewImg: '',
  });

  return (
    <>
      <ScrollView>
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <View style={styles.topContainer}>
            <AddScore reviewData={reviewData} setReviewData={setReviewData} />
            <AddContent reviewData={reviewData} setReviewData={setReviewData} />
            {reviewData.reviewImg && <ImageView uri={reviewData.reviewImg} />}
          </View>
        </Pressable>
      </ScrollView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <AddImage reviewData={reviewData} setReviewData={setReviewData} />
      </Pressable>
    </>
  );
};

export default AddRecipeReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 24,
    paddingBottom: FWidth * 47,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: FWidth * 22,
  },
});
