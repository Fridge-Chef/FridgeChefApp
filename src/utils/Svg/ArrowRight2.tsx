import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const ArrowRight2 = () => {
  return (
    <Svg
      width={FWidth * 20}
      height={FWidth * 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M6.6666 16.667L13.3333 10.0003L6.6666 3.33366"
        stroke="#2C2C2E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowRight2;

const styles = StyleSheet.create({});
