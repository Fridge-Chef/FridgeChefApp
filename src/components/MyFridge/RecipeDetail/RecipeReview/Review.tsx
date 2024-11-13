import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';
import BottomComponent from './BottomComponent';
import DetailReviewMore from '../../../../utils/Svg/DetailReviewMore';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRecipeReviewTitle, useUserReview} from '../../../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetRecipeDetail} from '../../../../api/recipeQuery';
import {RecipeReviewDetailType} from '../../../../type/types';
import AppBarMenu from '../../../elements/AppBarMenu';
import {
  useDeleteDetailReview,
  useLikeRecipeReview,
} from '../../../../api/commentReviewQuery';
import LoginModal from '../../../elements/Modals/LoginModal';
import DeleteModal from '../../../elements/Modals/DeleteModal';
import {useQueryClient} from '@tanstack/react-query';

type ReviewProps = {
  review: RecipeReviewDetailType;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [userCheck, setUserCheck] = useState(false);
  const {mutate: commentDelete} = useDeleteDetailReview();
  const {setReviewTitle} = useRecipeReviewTitle();
  const {refetch: detail} = useGetRecipeDetail(review.boardId);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useLikeRecipeReview();
  const queryClient = useQueryClient();
  const {setUserReview} = useUserReview();
  const handleReviewDetail = () => {
    setReviewTitle(title);
    setMenuOpen(false);
    navigation.navigate('userReviewDetail', {item: review});
  };

  const userChecked = async () => {
    const userName = await AsyncStorage.getItem('nickname');
    const userCheck = userName === review.userName;
    if (userCheck) {
      setUserCheck(true);
    } else {
      setUserCheck(false);
    }
  };

  useEffect(() => {
    userChecked();
  }, [review]);

  const handleClose = () => {
    const data = queryClient.getQueriesData({
      queryKey: ['recipeReviewDetail', '91의 0'],
    });
    console.log(data);
    setMenuOpen(false);
    setModalCheck(false);
    setUserReview({});
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
        {userCheck && (
          <FButton
            buttonStyle="noneStyle"
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => setMenuOpen(!menuOpen)}>
            <DetailReviewMore />
          </FButton>
        )}
        {menuOpen && (
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
