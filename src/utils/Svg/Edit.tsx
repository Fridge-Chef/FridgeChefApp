import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';

const Edit = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5631 16.4551H10.1234C9.81285 16.4551 9.56085 16.2031 9.56085 15.8926C9.56085 15.5821 9.81285 15.3301 10.1234 15.3301H15.5631C15.8736 15.3301 16.1256 15.5821 16.1256 15.8926C16.1256 16.2031 15.8736 16.4551 15.5631 16.4551Z"
        fill="black"
      />
      <Mask
        id="mask0_53_4334"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="14"
        height="15">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.50024 2.25H14.3857V16.4547H1.50024V2.25Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_53_4334)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.83295 3.76248L2.7717 12.5937C2.64345 12.7542 2.5962 12.9612 2.64345 13.16L3.1542 15.3237L5.43345 15.2952C5.6502 15.293 5.85045 15.1962 5.9832 15.0312C8.39595 12.0125 12.9957 6.25698 13.1262 6.08823C13.2492 5.88873 13.2972 5.60673 13.2327 5.33523C13.1667 5.05698 12.9934 4.82073 12.7437 4.66998C12.6904 4.63323 11.4267 3.65223 11.3877 3.62148C10.9122 3.24048 10.2184 3.30648 9.83295 3.76248ZM2.7102 16.4547C2.44995 16.4547 2.22345 16.2762 2.1627 16.022L1.54845 13.4187C1.4217 12.8795 1.5477 12.323 1.89345 11.891L8.95845 3.05448C8.96145 3.05148 8.9637 3.04773 8.9667 3.04473C9.74145 2.11848 11.1424 1.98198 12.0875 2.74023C12.1249 2.76948 13.3797 3.74448 13.3797 3.74448C13.8357 4.01598 14.1919 4.50123 14.327 5.07573C14.4612 5.64423 14.3637 6.23073 14.051 6.72648C14.0277 6.76323 14.0075 6.79473 6.86145 15.7347C6.5172 16.1637 6.0012 16.4135 5.44695 16.4202L2.7177 16.4547H2.7102Z"
          fill="black"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1676 8.76353C12.0476 8.76353 11.9276 8.72528 11.8248 8.64728L7.73581 5.50628C7.48981 5.31728 7.44331 4.96478 7.63231 4.71728C7.82206 4.47128 8.17456 4.42553 8.42131 4.61453L12.5111 7.75478C12.7571 7.94378 12.8036 8.29703 12.6138 8.54378C12.5036 8.68778 12.3363 8.76353 12.1676 8.76353Z"
        fill="black"
      />
    </Svg>
  );
};

export default Edit;

const styles = StyleSheet.create({});