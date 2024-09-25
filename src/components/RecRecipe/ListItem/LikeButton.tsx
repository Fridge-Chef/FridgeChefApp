import {StyleSheet} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import SvgImage from '../../elements/SvgImage';
import Heart2 from '../../../utils/Svg/Heart2';

type LikeButtonProps = {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({isLike, setIsLike}: LikeButtonProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={() => setIsLike(!isLike)}>
      <Heart2 isLike={isLike} />
    </FButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
