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

type ReviewItemProps = {
  review: {
    boardId: number;
    username: string;
    star: number;
    title: string;
    comments: string;
    createdAt: string;
    imageLink: string[];
    like: number;
  };
};

const ReviewItem = ({review}: ReviewItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const {setReviewTitle} = useRecipeReviewTitle();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleReviewDetail = () => {
    setReviewTitle(review.title);
    navigation.navigate('userReviewDetail', {item: review});
  };
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={handleReviewDetail}>
      <View style={styles.iconAlign}>
        <UserInfo writer={review.username} point={review.star} />
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
        isClicked={isClicked}
        review={review}
        onPress={() => setIsClicked(!isClicked)}
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
