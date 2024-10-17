import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Heart = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M13.3747 8.57574L8.98995 12.9605C8.44322 13.5072 7.55678 13.5072 7.01005 12.9605L2.62527 8.57574C1.25824 7.2087 1.25824 4.99231 2.62527 3.62527C3.99231 2.25824 6.2087 2.25824 7.57574 3.62527C7.81005 3.85959 8.18995 3.85959 8.42426 3.62527C9.7913 2.25824 12.0077 2.25824 13.3747 3.62527C14.7418 4.99231 14.7418 7.2087 13.3747 8.57574Z"
        stroke="#777777"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Heart;

const styles = StyleSheet.create({});
