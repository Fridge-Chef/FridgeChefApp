import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailLikeHeart = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M13.5228 8.66667L9.41419 12.7753C8.63314 13.5563 7.36681 13.5563 6.58577 12.7753L2.47713 8.66667C0.95204 7.14157 0.95204 4.66891 2.47713 3.14382C4.00222 1.61873 6.47489 1.61873 7.99998 3.14382C9.52507 1.61873 11.9977 1.61873 13.5228 3.14382C15.0479 4.66891 15.0479 7.14157 13.5228 8.66667Z"
        fill="#FF6D54"
      />
    </Svg>
  );
};

export default DetailLikeHeart;

const styles = StyleSheet.create({});
