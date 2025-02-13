import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import {
  useAddRecipeReview,
  useGetRecipeDetailReviewList,
  useGetRecipeReviewDetail,
  useUpdateDetailReview,
} from '../../../api/commentReviewQuery';
import {useMyRecipeReviews} from '../../../api/recipeBookQuery';
import {useGetRecipeDetail} from '../../../api/recipeQuery';
import {useUserBoardCount} from '../../../api/userQuery';
import {showToast} from '../../../helpers/ShowToast';
import {isValidReview} from '../../../service/MyFridge/Reviews/Review';
import {useUserReview} from '../../../store/store';
import FAppBar from '../../elements/FAppBar';
import FModal from '../../elements/FModal';
import Loading from '../../elements/Loading';

const AddReviewAppBar = () => {
  const {userReview, setUserReview} = useUserReview();
  const [isBack, setIsBack] = useState(false);
  const [updateCheck, setUpdateCheck] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useAddRecipeReview();
  const queryClient = useQueryClient();
  const [dataLoading, setDataLoading] = useState(false);
  const {refetch: userDataCount} = useUserBoardCount();
  const {mutate: updateMutate} = useUpdateDetailReview();
  const {refetch: myRecipeReviews} = useMyRecipeReviews();
  const {refetch} = useGetRecipeDetailReviewList(userReview.boardId);
  const {refetch: recipeDetail} = useGetRecipeDetail(userReview.boardId);
  const {refetch: reviewDetail} = useGetRecipeReviewDetail(
    userReview.boardId,
    userReview.commentId!,
  );

  const handleSubmit = async () => {
    if (userReview.comment.length < 10) {
      showToast({
        text: '10자 이상 입력해주세요.',
        time: 2000,
      });
    }
    if (!isValidReview(userReview)) return;

    setDataLoading(true);
    if (userReview.type === 'update') {
      handleUpdateReview();
    } else {
      handleAddReview();
    }
  };

  const handleAddReview = () => {
    mutate(
      {
        boardId: userReview.boardId,
        reviewData: {
          comment: userReview.comment,
          images: userReview.images,
          imagesFile: userReview.imagesFile!,
          star: userReview.star,
        },
      },
      {
        onSuccess: () => {
          setDataLoading(false);
          setUserReview({});
          userDataCount();
          refetchRecipeDetails();
          myRecipeReviews();
          navigation.goBack();
        },
      },
    );
  };

  const handleUpdateReview = () => {
    updateMutate(
      {
        boardId: userReview.boardId,
        commentId: userReview.commentId!,
        review: userReview,
      },
      {
        onSuccess: () => {
          setUpdateCheck(true);
          setDataLoading(false);
          refetchRecipeDetails();
        },
      },
    );
  };

  const refetchRecipeDetails = () => {
    recipeDetail();
    refetch();
    queryClient.invalidateQueries({
      queryKey: [
        'recipeReviewDetail',
        'recipeDetailReviewList',
        'myRecipeReviews',
      ],
    });
  };

  const handleTextColor = () => {
    if (userReview.comment?.length < 10 || userReview.star === 0) {
      return colors.disabled;
    } else {
      return colors.secondary[1];
    }
  };

  return (
    <>
      {dataLoading && <Loading loadingTitle="로딩중" />}
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
      {(updateCheck || isBack) && (
        <FModal
          modalVisible={updateCheck || isBack}
          cancel={updateCheck ? false : true}
          cancelOnPress={() => {
            if (!updateCheck) {
              setIsBack(false);
              navigation.goBack();
            }
          }}
          onPress={() => {
            if (updateCheck) {
              refetch();
              setUpdateCheck(false);
              reviewDetail();
              navigation.goBack();
            }
            setIsBack(false);
          }}
          text={
            updateCheck
              ? '수정이 완료되었습니다.'
              : '작성을 취소하면 내용이 사라집니다.'
          }
          buttonText={updateCheck ? '확인' : '작성하기'}
          cancelText="나가기"
        />
      )}
    </>
  );
};

export default AddReviewAppBar;

const styles = StyleSheet.create({});
