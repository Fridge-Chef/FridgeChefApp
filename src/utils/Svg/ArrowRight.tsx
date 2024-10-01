import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const ArrowRight = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M5.33328 13.333L10.6666 7.99968L5.33328 2.66634"
        stroke="#545559"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowRight;

const styles = StyleSheet.create({});
