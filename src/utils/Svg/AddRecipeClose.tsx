import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const AddRecipeClose = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M3.3335 12.6673L12.6668 3.33398"
        stroke="black"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M12.6668 12.6673L3.3335 3.33398"
        stroke="black"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddRecipeClose;

const styles = StyleSheet.create({});
