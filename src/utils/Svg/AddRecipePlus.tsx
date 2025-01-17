import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const AddRecipePlus = () => {
  return (
    <Svg
      width={FWidth * 19}
      height={FWidth * 19}
      viewBox="0 0 19 19"
      fill="none">
      <Path
        d="M9.5 4.25V14.75M4.25 9.5H14.75"
        stroke="#2C2C2E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AddRecipePlus;

const styles = StyleSheet.create({});
