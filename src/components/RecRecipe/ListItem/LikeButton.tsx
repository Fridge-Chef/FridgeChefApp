import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';

type LikeButtonProps = {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({isLike, setIsLike}: LikeButtonProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={() => setIsLike(!isLike)}>
      <Image
        source={
          isLike
            ? require('../../../assets/images/heart_none.png')
            : require('../../../assets/images/heart_fill.png')
        }
        alt="좋아요"
      />
    </FButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
