import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from '../../../elements/FButton';
import {FWidth} from '../../../../../globalStyle';
import RecipeListHeart from '../../../../utils/Svg/RecipeListHeart';
import RecipeListHeart2 from '../../../../utils/Svg/RecipeListHeart2';

type LikeButtonProps = {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({isLike, setIsLike}: LikeButtonProps) => {
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
        onPress={() => setIsLike(!isLike)}>
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
