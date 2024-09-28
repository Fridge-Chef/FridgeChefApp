import {StyleSheet} from 'react-native';
import React from 'react';
import FButton from '../../../elements/FButton';
import {colors, FWidth} from '../../../../../globalStyle';
import LikeIcon2 from '../../../../utils/Svg/LikeIcon2';
import FText from '../../../elements/FText';

type LikeButtonProps = {
  views: number;
};

const LikeButton = ({views}: LikeButtonProps) => {
  return (
    <FButton
      buttonStyle="iconButton"
      marginTop={FWidth * 24}
      borderWidth={1}
      fBStyle={styles.likeButton}>
      <LikeIcon2 />
      <FText
        mLeft={FWidth * 6}
        fStyle="R_16"
        color={colors.subText}
        text={views}
      />
    </FButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  likeButton: {
    borderColor: colors.border,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
});
