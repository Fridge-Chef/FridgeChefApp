import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Back = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 4L8 12L16 20"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Back;

const styles = StyleSheet.create({});