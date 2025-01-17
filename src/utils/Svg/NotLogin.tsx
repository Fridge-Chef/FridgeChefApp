import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {ClipPath, Defs, G, Mask, Path, Rect} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const NotLogin = () => {
  return (
    <Svg
      width={FWidth * 59}
      height={FWidth * 58}
      viewBox="0 0 59 58"
      fill="none">
      <G clip-path="url(#clip0_616_23016)">
        <Mask
          id="mask0_616_23016"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="59"
          height="58">
          <Path
            d="M58.5 29C58.5 12.9837 45.5163 0 29.5 0C13.4837 0 0.5 12.9837 0.5 29C0.5 45.0163 13.4837 58 29.5 58C45.5163 58 58.5 45.0163 58.5 29Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_616_23016)">
          <Path d="M58.5 0H0.5V58H58.5V0Z" fill="#545559" />
          <Rect
            x="8.4751"
            y="13.0508"
            width="42.05"
            height="72.5"
            rx="21.025"
            fill="#EDEDED"
          />
          <Path
            d="M21.5249 39.709C21.5249 41.3113 22.3736 42.8481 23.8843 43.9811C25.395 45.1141 27.444 45.7507 29.5805 45.7507C31.7169 45.7507 33.7659 45.1141 35.2766 43.9811C36.7873 42.8481 37.636 41.3113 37.636 39.709"
            fill="black"
          />
          <Path
            d="M26.6 31.175C26.6 29.9738 25.6262 29 24.425 29C23.2238 29 22.25 29.9738 22.25 31.175C22.25 32.3762 23.2238 33.35 24.425 33.35C25.6262 33.35 26.6 32.3762 26.6 31.175Z"
            fill="black"
          />
          <Path
            d="M36.75 31.175C36.75 29.9738 35.7762 29 34.575 29C33.3738 29 32.4 29.9738 32.4 31.175C32.4 32.3762 33.3738 33.35 34.575 33.35C35.7762 33.35 36.75 32.3762 36.75 31.175Z"
            fill="black"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_616_23016">
          <Rect
            width="58"
            height="58"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NotLogin;

const styles = StyleSheet.create({});
