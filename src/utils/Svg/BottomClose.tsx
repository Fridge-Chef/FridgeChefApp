import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BottomClose = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.1665 15.8334L15.8332 4.16669"
        stroke="black"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.8332 15.8334L4.1665 4.16669"
        stroke="black"
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default BottomClose;

const styles = StyleSheet.create({});
