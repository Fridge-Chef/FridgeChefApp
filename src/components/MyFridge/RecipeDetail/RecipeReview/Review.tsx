import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';
import BottomComponent from './BottomComponent';
import DetailReviewMore from '../../../../utils/Svg/DetailReviewMore';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRecipeReviewTitle} from '../../../../store/store';

type ReviewProps = {
  review: {
    boardId: number;
    comments: string;
    createdAt: string;
    id: number;
    imageLink: string[];
    like: number;
    star: number;
    userName: string;
  };
  title: string;
};

const Review = ({review, title}: ReviewProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const {setReviewTitle} = useRecipeReviewTitle();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
        isClicked={isClicked}
        review={review}
        onPress={() => setIsClicked(!isClicked)}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
