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
import AddImage from '../../components/Community/AddRecipe/AddImage';
import AddScore from '../../components/Community/AddRecipe/AddScore';
import AddContent from '../../components/Community/AddRecipe/AddContent';
import ImageView from '../../components/Community/AddRecipe/ImageView';

type AddRecipeProps = {
  title: string;
};

const AddRecipe = ({title}: AddRecipeProps) => {
  const [reviewData, setReviewData] = useState({
    id: 1,
    reviewPoint: 0,
    reviewContent: '',
    reviewImg: '',
  });
  console.log(reviewData);
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.topContainer}>
          <AddScore reviewData={reviewData} setReviewData={setReviewData} />
          <AddContent reviewData={reviewData} setReviewData={setReviewData} />
          <ImageView uri={reviewData.reviewImg} />
        </View>
      </ScrollView>
      <AddImage reviewData={reviewData} setReviewData={setReviewData} />
    </Pressable>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 24,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: FWidth * 22,
  },
});
