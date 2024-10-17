import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const RecipeListHeart = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.2843 13L13.4142 19.8701C12.6332 20.6511 11.3668 20.6511 10.5858 19.8701L3.71573 13C1.42809 10.7124 1.42809 7.00337 3.71573 4.71573C6.00337 2.42809 9.71236 2.42809 12 4.71573C14.2876 2.42809 17.9966 2.42809 20.2843 4.71573C22.5719 7.00337 22.5719 10.7124 20.2843 13Z"
        fill="#FF6D54"
      />
    </Svg>
  );
};

export default RecipeListHeart;

const styles = StyleSheet.create({});
