import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const ArrowDown = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M3 6.74902L8.99999 12.749L15 6.74902"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowDown;

const styles = StyleSheet.create({});
