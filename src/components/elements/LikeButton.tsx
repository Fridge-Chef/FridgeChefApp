import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from './FButton';
import {colors, FHeight, FWidth} from '../../../globalStyle';
import DetailReviewLikeColor from '../../utils/Svg/DetailReviewLikeColor';
import DetailReviewLike from '../../utils/Svg/DetailReviewLike';
import FText from './FText';

type LikeButtonProps = {
  onPress: () => void;
  isClicked: boolean;
  views: number;
};

const LikeButton = ({onPress, isClicked, views}: LikeButtonProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View style={styles.iconAlign}>
        {isClicked ? <DetailReviewLikeColor /> : <DetailReviewLike />}
        <FText
          mLeft={FWidth * 6}
          fStyle="M_14"
          color={isClicked ? colors.primary[1] : colors.b500}
          text={views}
        />
      </View>
    </FButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
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
