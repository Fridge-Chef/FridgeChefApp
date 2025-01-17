import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import {getExpiryDateInfo} from '../../../../service/MyFridge/MyFridge';
import {RecipeReviewDetailType} from '../../../../type/types';
import FText from '../../../elements/FText';
import LikeButton from '../../../elements/LikeButton';

type BottomComponentProps = {
  review: RecipeReviewDetailType;
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
      <LikeButton isClicked={isClicked} views={review.hit} onPress={onPress} />
      <FText
        fStyle="R_12"
        color={colors.b300}
        text={getExpiryDateInfo(review.createdAt)}
      />
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
