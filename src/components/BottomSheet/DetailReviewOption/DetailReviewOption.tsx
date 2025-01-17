import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../globalStyle';
import {
  useDeleteDetailReview,
  useGetRecipeDetailReviewList,
} from '../../../api/commentReviewQuery';
import {useMyRecipeReviews} from '../../../api/recipeBookQuery';
import {useUserBoardCount} from '../../../api/userQuery';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';
import {useRecipeReviewTitle, useUserReview} from '../../../store/store';
import DeleteModal from '../../elements/Modals/DeleteModal';
import MenuList from './MenuList';
import TopClose from './TopClose';

const DetailReviewOption = () => {
  const {userReview} = useUserReview();
  const {reviewTitle} = useRecipeReviewTitle();
  const {mutate} = useDeleteDetailReview();
  const {refetch: myRecipeReviews} = useMyRecipeReviews();
  const {refetch: userDataCount} = useUserBoardCount();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);
  const {bottomSheetRef} = useBottomSheetRef();
  const {refetch} = useGetRecipeDetailReviewList(userReview.boardId);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleClose = () => {
    setDeleteModal(false);
    myRecipeReviews();
    userDataCount();
    refetch();
    bottomSheetRef.current?.close();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopClose />
      <MenuList
        updateOnPress={() => {
          bottomSheetRef.current?.close();
          navigation.navigate('addRecipeReview', {
            review: {
              boardId: userReview.boardId,
              id: userReview.commentId,
              comments: userReview.comment,
              imageLink: userReview.images,
              star: userReview.star,
            },
            type: 'update',
            title: reviewTitle,
          });
        }}
        deleteOnPress={() => {
          setDeleteModal(true);
          setDeleteCheck(true);
        }}
      />
      <DeleteModal
        modalCheck={deleteModal}
        deleteCheck={deleteCheck}
        onPress={() =>
          deleteCheck
            ? mutate(
                {
                  boardId: userReview.boardId,
                  commentId: userReview.commentId!,
                },
                {
                  onSuccess: () => {
                    setDeleteCheck(false);
                  },
                },
              )
            : handleClose()
        }
        cancelOnPress={() => setDeleteModal(false)}
      />
    </View>
  );
};

export default DetailReviewOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 16,
  },
});
