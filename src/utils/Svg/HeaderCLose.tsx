import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const HeaderCLose = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M5 19L19 5"
        stroke="black"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M19 19L5 5"
        stroke="black"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default HeaderCLose;

const styles = StyleSheet.create({});
