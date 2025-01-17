import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const AddRecipeBottomArrow = () => {
  return (
    <Svg
      width={FWidth * 20}
      height={FWidth * 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M3.33325 6.66732L9.99991 13.334L16.6666 6.66732"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddRecipeBottomArrow;

const styles = StyleSheet.create({});
