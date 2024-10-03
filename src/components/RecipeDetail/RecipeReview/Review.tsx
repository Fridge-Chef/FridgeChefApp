import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import ReviewContent from './ReviewContent';
import UserInfo from './UserInfo';
import FText from '../../elements/FText';
import DetailReviewLike from '../../../utils/Svg/DetailReviewLike';
import FButton from '../../elements/FButton';
import DetailReviewLikeColor from '../../../utils/Svg/DetailReviewLikeColor';

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
      <UserInfo name={review.name} point={review.point} />
      <ReviewContent content={review} />
      <FButton buttonStyle="noneStyle" onPress={() => setIsClicked(!isClicked)}>
        <View style={styles.iconAlign}>
          {isClicked ? <DetailReviewLikeColor /> : <DetailReviewLike />}
          <FText
            mLeft={FWidth * 6}
            fStyle="M_14"
            color={isClicked ? colors.primary[1] : colors.b500}
            text={review.like}
          />
        </View>
      </FButton>
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
    marginTop: FWidth * 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: FHeight * 6,
    paddingHorizontal: FWidth * 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
});
