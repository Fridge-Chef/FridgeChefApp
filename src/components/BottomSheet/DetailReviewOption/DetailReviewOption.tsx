import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {FWidth} from '../../../../globalStyle';
import TopClose from './TopClose';
import MenuList from './MenuList';
import {useRecipeReviewTitle, useUserReview} from '../../../store/store';
import {
  useDeleteDetailReview,
  useGetRecipeDetailReviewList,
} from '../../../api/commentReviewQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DeleteModal from '../../elements/Modals/DeleteModal';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';

const DetailReviewOption = () => {
  const {userReview} = useUserReview();
  const {reviewTitle} = useRecipeReviewTitle();
  const {mutate} = useDeleteDetailReview();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);
  const {bottomSheetRef} = useBottomSheetRef();
  const {refetch} = useGetRecipeDetailReviewList(userReview.boardId);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleClose = () => {
    setDeleteModal(false);
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
