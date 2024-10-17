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
    writer: string;
    point: number;
    content: string;
    img: string;
    views: number;
  };
  title: string;
};

const Review = ({review, title}: ReviewProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const {setReviewTitle} = useRecipeReviewTitle();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleReviewDetail = () => {
    setReviewTitle(title);
    navigation.navigate('reviewDetail', {item: review});
  };

  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={handleReviewDetail}>
      <View style={styles.iconAlign}>
        <UserInfo writer={review.writer} point={review.point} />
        <DetailReviewMore />
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
