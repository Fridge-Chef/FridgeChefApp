import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import UserReview from '../../components/Community/CDetail/UserReview/UserReview';
import ReviewList from '../../components/Community/CDetail/ReviewList/ReviewList';

const CRecipeReviewDetail = () => {
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <UserReview />
      {/* <ReviewList /> */}
    </ScrollView>
  );
};

export default CRecipeReviewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
