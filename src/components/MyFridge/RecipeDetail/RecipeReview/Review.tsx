import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {
  useDeleteDetailReview,
  useLikeRecipeReview,
} from '../../../../api/commentReviewQuery';
import {useMyRecipeReviews} from '../../../../api/recipeBookQuery';
import {useGetRecipeDetail} from '../../../../api/recipeQuery';
import {useUserBoardCount} from '../../../../api/userQuery';
import {useRecipeReviewTitle, useUserReview} from '../../../../store/store';
import {RecipeReviewDetailType} from '../../../../type/types';
import DetailReviewMore from '../../../../utils/Svg/DetailReviewMore';
import AppBarMenu from '../../../elements/AppBarMenu';
import FButton from '../../../elements/FButton';
import DeleteModal from '../../../elements/Modals/DeleteModal';
import LoginModal from '../../../elements/Modals/LoginModal';
import BottomComponent from './BottomComponent';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';

type ReviewProps = {
  review: RecipeReviewDetailType;
  menuOpen: boolean | number;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number>>;
  title: string;
  refetch: () => void;
};

const Review = ({
  review,
  title,
  refetch,
  menuOpen,
  setMenuOpen,
}: ReviewProps) => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(true);
  // const [userCheck, setUserCheck] = useState(false);
  const {refetch: userDataCount} = useUserBoardCount();
  const {mutate: commentDelete} = useDeleteDetailReview();
  const {setReviewTitle} = useRecipeReviewTitle();
  const {refetch: myRecipeReviews} = useMyRecipeReviews();
  const {refetch: detail} = useGetRecipeDetail(review.boardId);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useLikeRecipeReview();
  const {setUserReview} = useUserReview();
  const handleReviewDetail = () => {
    setReviewTitle(title);
    setMenuOpen(false);
    navigation.navigate('userReviewDetail', {item: review});
  };

  const handleClose = () => {
    setMenuOpen(false);
    setModalCheck(false);
    setUserReview({});
    userDataCount();
    detail();
    refetch();
  };

  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={handleReviewDetail}>
      <View style={styles.iconAlign}>
        <UserInfo writer={review.userName} point={review.star} />
        {review.myMe && (
          <FButton
            buttonStyle="noneStyle"
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() =>
              setMenuOpen(review.id === menuOpen ? false : review.id)
            }>
            <DetailReviewMore />
          </FButton>
        )}
        {menuOpen === review.id && (
          <View style={styles.menuContainer}>
            <AppBarMenu
              id={review.id}
              updateOnPress={() => {
                navigation.navigate('addRecipeReview', {
                  type: 'update',
                  title,
                  review,
                });
                setMenuOpen(false);
              }}
              deleteOnPress={() => setModalCheck(true)}
            />
          </View>
        )}
      </View>
      <ReviewContent content={review} />
      <BottomComponent
        isClicked={review.myHit}
        review={review}
        onPress={async () => {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            mutate(
              {
                boardId: review.boardId,
                commentId: review.id,
              },
              {
                onSuccess: () => {
                  refetch();
                  myRecipeReviews();
                },
              },
            );
          } else {
            setLoginCheck(true);
          }
        }}
      />
      <LoginModal
        loginCheck={loginCheck}
        onPress={() => {
          navigation.navigate('serviceLogin');
          setLoginCheck(false);
        }}
        cancelOnPress={() => setLoginCheck(false)}
      />
      <DeleteModal
        modalCheck={modalCheck}
        deleteCheck={deleteCheck}
        onPress={() =>
          deleteCheck
            ? commentDelete(
                {
                  boardId: review.boardId,
                  commentId: review.id,
                },
                {
                  onSuccess: () => {
                    setDeleteCheck(false);
                  },
                },
              )
            : handleClose()
        }
        cancelOnPress={() => {
          setModalCheck(false);
          setMenuOpen(false);
        }}
      />
    </FButton>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  iconAlign: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuContainer: {
    zIndex: 10,
    right: FWidth * -16,
    top: FWidth * 30,
    position: 'absolute',
  },
});
