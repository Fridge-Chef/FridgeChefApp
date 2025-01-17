import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const AddRecipeDeleteIcon = () => {
  return (
    <Svg
      width={FWidth * 20}
      height={FWidth * 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M4.16675 15.8327L15.8334 4.16602"
        stroke="#545559"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.8334 15.8327L4.16675 4.16602"
        stroke="#545559"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddRecipeDeleteIcon;

const styles = StyleSheet.create({});
