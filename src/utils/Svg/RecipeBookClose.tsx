import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const RecipeBookClose = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M3.33301 12.6667L12.6663 3.33337"
        stroke="#2C2C2E"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M12.6663 12.6667L3.33301 3.33337"
        stroke="#2C2C2E"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RecipeBookClose;

const styles = StyleSheet.create({});
