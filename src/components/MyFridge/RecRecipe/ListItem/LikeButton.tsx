import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../../globalStyle';
import RecipeListHeart from '../../../../utils/Svg/RecipeListHeart';
import RecipeListHeart2 from '../../../../utils/Svg/RecipeListHeart2';
import FButton from '../../../elements/FButton';

type LikeButtonProps = {
  isLike: boolean;
  onPress: () => void;
};

const LikeButton = ({isLike, onPress}: LikeButtonProps) => {
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}
        onPress={onPress}>
        {isLike ? <RecipeListHeart /> : <RecipeListHeart2 />}
      </FButton>
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: FWidth * 6,
  },
});
