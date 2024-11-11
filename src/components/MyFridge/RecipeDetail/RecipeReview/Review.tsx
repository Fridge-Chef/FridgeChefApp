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

type ReviewProps = {
  review: RecipeReviewDetailType;

  title: string;
  refetch: () => void;
};

const Review = ({review, title, refetch}: ReviewProps) => {
  const [loginCheck, setLoginCheck] = useState(false);
  const {setReviewTitle} = useRecipeReviewTitle();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useLikeRecipeReview();
  const handleReviewDetail = () => {
    setReviewTitle(title);
    navigation.navigate('userReviewDetail', {item: review});
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
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => {
            console.log('옵션버튼');
          }}>
          <DetailReviewMore />
        </FButton>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
