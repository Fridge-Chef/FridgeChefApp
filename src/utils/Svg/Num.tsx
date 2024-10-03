import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Num = () => {
  return (
    <Svg
      width={FWidth * 20}
      height={FWidth * 20}
      viewBox="0 0 20 20"
      fill="none">
      <Rect width="20" height="20" rx="10" fill="#FC846F" />
      <Path
        d="M11.7637 15H9.69922V7.05664H9.64453L7.375 8.47852V6.66016L9.82227 5.10156H11.7637V15Z"
        fill="white"
      />
    </Svg>
  );
};

export default Num;

const styles = StyleSheet.create({});
