import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailBack = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        opacity="0.6"
        d="M16 4L8 12L16 20"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default DetailBack;

const styles = StyleSheet.create({});
