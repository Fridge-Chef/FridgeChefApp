import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ClipPath, Defs, G, Mask, Path, Rect, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

type LoginIconProps = {
  test?: boolean;
};

const LoginIcon = ({test}: LoginIconProps) => {
  return (
    <Svg
      width={FWidth * 22}
      height={FWidth * 22}
      viewBox="0 0 22 22"
      fill="none">
      <G clip-path="url(#clip0_2121_5315)">
        <Mask
          id="mask0_2121_5315"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="22"
          height="22">
          <Path
            d="M22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_2121_5315)">
          <Path d="M22 0H0V22H22V0Z" fill={test ? '#FC846F' : '#AAAAAA'} />
          <Rect
            x="3.0249"
            y="4.9502"
            width="15.95"
            height="27.5"
            rx="7.975"
            fill={test ? '#FFE08C' : '#EDEDED'}
          />
          <Path
            d="M7.9751 15.062C7.9751 15.6698 8.29702 16.2527 8.87005 16.6825C9.44308 17.1122 10.2203 17.3537 11.0307 17.3537C11.841 17.3537 12.6182 17.1122 13.1913 16.6825C13.7643 16.2527 14.0862 15.6698 14.0862 15.062"
            fill={test ? colors.black : '#AAAAAA'}
          />
          <Path
            d="M9.9 11.825C9.9 11.3694 9.53063 11 9.075 11C8.61937 11 8.25 11.3694 8.25 11.825C8.25 12.2806 8.61937 12.65 9.075 12.65C9.53063 12.65 9.9 12.2806 9.9 11.825Z"
            fill={test ? colors.black : '#AAAAAA'}
          />
          <Path
            d="M13.75 11.825C13.75 11.3694 13.3806 11 12.925 11C12.4694 11 12.1 11.3694 12.1 11.825C12.1 12.2806 12.4694 12.65 12.925 12.65C13.3806 12.65 13.75 12.2806 13.75 11.825Z"
            fill={test ? colors.black : '#AAAAAA'}
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2121_5315">
          <Rect width="22" height="22" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LoginIcon;

const styles = StyleSheet.create({});
