import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Star = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 1.16699L8.8025 4.81866L12.8333 5.40783L9.91666 8.24866L10.605 12.262L7 10.3662L3.395 12.262L4.08333 8.24866L1.16666 5.40783L5.1975 4.81866L7 1.16699Z"
        fill="#FEBF00"
        stroke="#FEBF00"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Star;

const styles = StyleSheet.create({});
