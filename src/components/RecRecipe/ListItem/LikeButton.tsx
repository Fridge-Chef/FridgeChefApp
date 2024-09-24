import {StyleSheet} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import SvgImage from '../../elements/SvgImage';

type LikeButtonProps = {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({isLike, setIsLike}: LikeButtonProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={() => setIsLike(!isLike)}>
      <SvgImage type="heart3" width={20} height={20} fill="" />
    </FButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
