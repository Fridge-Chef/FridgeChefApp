import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const RankArrow = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M2.66663 5.33366L7.99995 10.667L13.3333 5.33366"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RankArrow;

const styles = StyleSheet.create({});
