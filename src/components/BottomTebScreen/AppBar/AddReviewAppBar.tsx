import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FAppBar from '../../elements/FAppBar';
import {colors} from '../../../../globalStyle';
import {useUserReview} from '../../../store/store';
import {showToast} from '../../../helpers/ShowToast';

const AddReviewAppBar = () => {
  const {userReview, setUserReview} = useUserReview();

  const handleSubmit = async () => {
    if (userReview.reviewContent === '') {
      showToast({
        text: '앗! 후기를 입력해주세요 😊',
        time: 3000,
      });
      return;
    } else if (userReview.reviewPoint === 0) {
      showToast({
        text: '앗! 점수를 주세요 😊',
        time: 3000,
      });
      return;
    } else if (userReview.reviewContent.length < 10) {
      showToast({
        text: '앗! 최소 10자 이상 입력해 주세요 😊',
        time: 3000,
      });
      return;
    }
  };

  const handleTextColor = () => {
    if (userReview.reviewContent.length < 10 || userReview.reviewPoint === 0) {
      return colors.disabled;
    } else {
      return colors.secondary[1];
    }
  };

  return (
    <FAppBar
      type="close3"
      titleOn={true}
      title="후기 작성"
      rightOn={true}
      rightTitleOn={true}
      rightTitle="완료"
      onBackPress={() => {
        setUserReview({
          reviewContent: '',
          reviewPoint: 0,
          reviewImg: '',
        });
      }}
      rightTextColor={handleTextColor()}
      textOnPress={handleSubmit}
    />
  );
};

export default AddReviewAppBar;

const styles = StyleSheet.create({});
