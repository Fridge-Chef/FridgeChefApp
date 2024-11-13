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
import {useRecipeReviewTitle} from '../../../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLikeRecipeReview} from '../../../../api/recipeQuery';
import FModal from '../../../elements/FModal';
import {RecipeReviewDetailType} from '../../../../type/types';
import AppBarMenu from '../../../elements/AppBarMenu';
import {useDeleteDetailReview} from '../../../../api/commentReviewQuery';

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
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useLikeRecipeReview();
  const handleReviewDetail = () => {
    setReviewTitle(title);
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
    setMenuOpen(false);
    setModalCheck(false);
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
      {loginCheck && (
        <FModal
          modalVisible={loginCheck}
          buttonText="로그인"
          text="로그인이 필요한 서비스입니다."
          cancel={true}
          cancelText="취소"
          cancelOnPress={() => setLoginCheck(false)}
          onPress={() => {
            navigation.navigate('serviceLogin');
            setLoginCheck(false);
          }}
        />
      )}
      {modalCheck && (
        <FModal
          modalVisible={modalCheck}
          buttonText={deleteCheck ? '삭제' : '확인'}
          cancelText="취소"
          cancel={deleteCheck ? true : false}
          text={
            deleteCheck
              ? '정말로 이글을 삭제하시겠습니까?'
              : '삭제가 완료되었습니다.'
          }
          text2={deleteCheck ? '삭제한 글은 복구할 수 없습니다.' : null}
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
          cancelOnPress={() => setModalCheck(false)}
        />
      )}
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
