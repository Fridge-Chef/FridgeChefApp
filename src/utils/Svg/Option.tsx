import React from 'react';
import {StyleSheet} from 'react-native';
import {Circle, Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Option = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M4 8H13"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 8L20 8"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 16L20 16"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 16H7"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="9" cy="16" r="2" stroke="black" strokeWidth="1.5" />
      <Circle cx="15" cy="8" r="2" stroke="black" strokeWidth="1.5" />
    </Svg>
  );
};

export default Option;

const styles = StyleSheet.create({});
