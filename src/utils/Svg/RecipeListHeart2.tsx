import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const RecipeListHeart2 = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.4697 5.24606C11.6103 5.38671 11.8011 5.46573 12 5.46573C12.1989 5.46573 12.3897 5.38671 12.5303 5.24606C14.5251 3.25131 17.7592 3.25131 19.7539 5.24606C21.7487 7.2408 21.7487 10.4749 19.7539 12.4697L12.8839 19.3397C12.3957 19.8279 11.6043 19.8279 11.1161 19.3397L4.24606 12.4697C2.25131 10.4749 2.25131 7.2408 4.24606 5.24606C6.2408 3.25131 9.47493 3.25131 11.4697 5.24606Z"
        stroke="#BCBCC4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RecipeListHeart2;

const styles = StyleSheet.create({});
