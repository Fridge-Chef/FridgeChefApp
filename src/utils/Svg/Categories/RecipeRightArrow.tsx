import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const RecipeRightArrow = () => {
  return (
    <Svg width="28" height="32" viewBox="0 0 28 28" fill="none">
      <Rect width="28" height="32" fill="none" />
      <Rect width="28" height="32" fill="none" />
      <Path
        d="M11 20L17 14L11 8"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RecipeRightArrow;

const styles = StyleSheet.create({});
