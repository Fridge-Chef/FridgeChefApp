import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Star = () => {
  return (
    <Svg
      width={FWidth * 14}
      height={FWidth * 14}
      viewBox="0 0 14 14"
      fill="none">
      <Path
        d="M7 1.16699L8.8025 4.81866L12.8333 5.40783L9.91666 8.24866L10.605 12.262L7 10.3662L3.395 12.262L4.08333 8.24866L1.16666 5.40783L5.1975 4.81866L7 1.16699Z"
        fill="#FEBF00"
        stroke="#FEBF00"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Star;

const styles = StyleSheet.create({});
