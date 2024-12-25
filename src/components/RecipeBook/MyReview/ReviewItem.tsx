import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FButton from '../../elements/FButton';
import UserInfo from '../../MyFridge/RecipeDetail/RecipeReview/UserInfo';
import DetailReviewMore from '../../../utils/Svg/DetailReviewMore';
import ReviewContent from '../../MyFridge/RecipeDetail/RecipeReview/ReviewContent';
import BottomComponent from '../../MyFridge/RecipeDetail/RecipeReview/BottomComponent';
import {colors, FWidth} from '../../../../globalStyle';
import {useRecipeReviewTitle} from '../../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MyReviewTitle from './MyReviewTitle';
import {useQueryClient} from '@tanstack/react-query';
import {useMyRecipeReviews} from '../../../api/recipeBookQuery';
import {MyRecipeReviewsType} from '../../../type/types';
import {
  useDeleteDetailReview,
  useGetRecipeDetailReviewList,
  useLikeRecipeReview,
} from '../../../api/commentReviewQuery';
import AppBarMenu from '../../elements/AppBarMenu';
import DeleteModal from '../../elements/Modals/DeleteModal';

type ReviewItemProps = {
  review: MyRecipeReviewsType;
  menuOpen: boolean | number | null;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number | null>>;
};

const ReviewItem = ({review, menuOpen, setMenuOpen}: ReviewItemProps) => {
  const queryList = useQueryClient();

  const [modalCheck, setModalCheck] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(true);
  const {mutate: deleteMutate} = useDeleteDetailReview();
  const {refetch} = useMyRecipeReviews();
  const {mutate} = useLikeRecipeReview();
  const {setReviewTitle} = useRecipeReviewTitle();
  const {refetch: detailReviewList} = useGetRecipeDetailReviewList(
    review.boardId,
  );
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleReviewDetail = () => {
    setReviewTitle(review.title);
    navigation.navigate('userReviewDetail', {
      item: {
        id: review.id,
        boardId: review.boardId,
      },
    });
  };
  const handleClose = () => {
    setMenuOpen(null!);
    setModalCheck(false);
    detailReviewList();
    refetch();
  };
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={handleReviewDetail}>
      <View style={styles.iconAlign}>
        <UserInfo writer={review.userName} point={review.star} />
        <FButton
          buttonStyle="noneStyle"
          onPress={() => {
            setMenuOpen(prev => (prev === review.id ? null : review.id));
          }}>
          <DetailReviewMore />
        </FButton>
      </View>
      <MyReviewTitle title={review.title} />
      <ReviewContent content={review} />
      <BottomComponent
        isClicked={review.myHit}
        review={review}
        onPress={() =>
          mutate(
            {
              boardId: review.boardId,
              commentId: review.id,
            },
            {
              onSuccess: () => {
                queryList.invalidateQueries({
                  queryKey: ['myRecipeReviews'],
                });
                refetch();
              },
            },
          )
        }
      />
      {menuOpen === review.id && (
        <View style={styles.menuContainer}>
          <AppBarMenu
            id={review.id}
            updateOnPress={() => {
              setMenuOpen(null!);
              navigation.navigate('addRecipeReview', {
                type: 'update',
                title: review.title,
                review,
              });
            }}
            deleteOnPress={() => setModalCheck(true)}
          />
        </View>
      )}
      <DeleteModal
        modalCheck={modalCheck}
        onPress={() =>
          deleteCheck
            ? deleteMutate(
                {boardId: review.boardId, commentId: review.id},
                {
                  onSuccess: () => {
                    setDeleteCheck(false);
                  },
                },
              )
            : handleClose()
        }
        deleteCheck={deleteCheck}
        cancelOnPress={() => {
          setMenuOpen(null!);
          setModalCheck(false);
        }}
      />
    </FButton>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  iconAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuContainer: {
    zIndex: 5,
    right: FWidth * 40,
    top: FWidth * -10,
    position: 'absolute',
  },
});
