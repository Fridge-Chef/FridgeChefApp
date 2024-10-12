import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const ArrowTitleIcon = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M2.6665 5.33366L7.99983 10.667L13.3332 5.33366"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowTitleIcon;

const styles = StyleSheet.create({});
