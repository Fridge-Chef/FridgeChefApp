import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FAppBar from '../../elements/FAppBar';
import {colors} from '../../../../globalStyle';
import {useUserReview} from '../../../store/store';
import FModal from '../../elements/FModal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  useAddRecipeReview,
  useGetRecipeDetailReview,
} from '../../../api/recipeQuery';

const AddReviewAppBar = () => {
  const {userReview, setUserReview} = useUserReview();
  const [isBack, setIsBack] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useAddRecipeReview();
  const {refetch} = useGetRecipeDetailReview(userReview.boardId);

  const handleSubmit = async () => {
    if (
      userReview.reviewContent === '' ||
      userReview.reviewPoint === 0 ||
      userReview.reviewContent.length < 10
    ) {
      console.log('데이터를 모두 입력해주세요');
      return;
    } else {
      mutate(
        {
          boardId: userReview.boardId,
          reviewData: {
            comment: userReview.reviewContent,
            images: userReview.reviewImg,
            imagesFile: userReview.reviewImgFile!,
            star: userReview.reviewPoint,
          },
        },
        {
          onSuccess: () => {
            setUserReview({
              boardId: 0,
              reviewPoint: 0,
              reviewContent: '',
              reviewImg: [],
              reviewImgFile: [],
            });
            refetch();
            navigation.goBack();
          },
        },
      );
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
    <>
      <FAppBar
        type="close3"
        titleOn={true}
        title="후기 작성"
        rightOn={true}
        rightTitleOn={true}
        rightTitle="완료"
        onBackPress={() => {
          setIsBack(true);
        }}
        rightTextColor={handleTextColor()}
        textOnPress={handleSubmit}
      />
      {isBack && (
        <FModal
          modalVisible={isBack}
          cancel
          cancelOnPress={() => {
            setIsBack(false);
            navigation.goBack();
          }}
          onPress={() => {
            setIsBack(false);
          }}
          text="작성을 취소하면 내용이 사라집니다."
          buttonText="작성하기"
          cancelText="나가기"
        />
      )}
    </>
  );
};

export default AddReviewAppBar;

const styles = StyleSheet.create({});
