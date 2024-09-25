import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import SvgImage from '../../elements/SvgImage';
import Heart2 from '../../../utils/Svg/Heart2';
import Heart3 from '../../../utils/Svg/Heart3';
import {FWidth} from '../../../../globalStyle';

type LikeButtonProps = {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({isLike, setIsLike}: LikeButtonProps) => {
  return (
    <View style={styles.container}>
      <FButton buttonStyle="noneStyle" onPress={() => setIsLike(!isLike)}>
        {isLike ? <Heart2 /> : <Heart3 />}
      </FButton>
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    // marginLeft: FWidth * 6,
  },
});
