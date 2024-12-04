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
import {useLikeRecipeReview} from '../../../api/commentReviewQuery';

type ReviewItemProps = {
  review: MyRecipeReviewsType;
};

const ReviewItem = ({review}: ReviewItemProps) => {
  const queryList = useQueryClient();
  const {refetch} = useMyRecipeReviews();
  const {mutate} = useLikeRecipeReview();
  const {setReviewTitle} = useRecipeReviewTitle();
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
            console.log('옵션버튼');
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
});
