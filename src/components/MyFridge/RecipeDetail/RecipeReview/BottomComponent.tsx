import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../../elements/FButton';
import DetailReviewLikeColor from '../../../../utils/Svg/DetailReviewLikeColor';
import DetailReviewLike from '../../../../utils/Svg/DetailReviewLike';
import FText from '../../../elements/FText';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import LikeButton from '../../../elements/LikeButton';

type BottomComponentProps = {
  review: {
    like: number;
  };
  isClicked: boolean;
  onPress: () => void;
};

const BottomComponent = ({
  review,
  isClicked,
  onPress,
}: BottomComponentProps) => {
  return (
    <View style={styles.container}>
      <LikeButton isClicked={isClicked} like={review.like} onPress={onPress} />
      <FText fStyle="R_12" color={colors.b300} text={'일주일 전'} />
    </View>
  );
};

export default BottomComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  iconAlign: {
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
