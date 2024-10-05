import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';
import BottomComponent from './BottomComponent';
import DetailReviewMore from '../../../../utils/Svg/DetailReviewMore';

type ReviewProps = {
  review: {
    name: string;
    point: number;
    content: string;
    img: string;
    like: number;
  };
};

const Review = ({review}: ReviewProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconAlign}>
        <UserInfo name={review.name} point={review.point} />
        <DetailReviewMore />
      </View>
      <ReviewContent content={review} />
      <BottomComponent
        isClicked={isClicked}
        review={review}
        onPress={() => setIsClicked(!isClicked)}
      />
    </View>
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
