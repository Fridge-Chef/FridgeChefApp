import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Num4 = () => {
  return (
    <Svg
      width={FWidth * 20}
      height={FWidth * 20}
      viewBox="0 0 20 20"
      fill="none">
      <Rect width="20" height="20" rx="10" fill="#FC846F" />
      <Path
        d="M6.01465 11.623L10.1982 5.10156H12.7822V11.5957H14.04V13.25H12.7822V15H10.8271V13.25H6.01465V11.623ZM10.8545 11.5957V7.35742H10.7588L8.09277 11.5137V11.5957H10.8545Z"
        fill="white"
      />
    </Svg>
  );
};

export default Num4;

const styles = StyleSheet.create({});
