import {StyleSheet} from 'react-native';
import React from 'react';
import {ClipPath, Defs, G, Mask, Path, Rect, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

type LoginIconProps = {
  test?: boolean;
};

const LoginIcon2 = ({test}: LoginIconProps) => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_96_6057)">
        <Mask
          id="mask0_96_6057"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24">
          <Path
            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_96_6057)">
          <Path d="M24 0H0V24H24V0Z" fill={test ? '#FC846F' : '#AAAAAA'} />
          <Rect
            x="3.29999"
            y="5.3999"
            width="17.4"
            height="30"
            rx="8.7"
            fill={test ? '#FFE08C' : '#EDEDED'}
          />
          <Path
            d="M8.70001 16.4312C8.70001 17.0942 9.0512 17.7301 9.67632 18.1989C10.3014 18.6678 11.1493 18.9312 12.0333 18.9312C12.9174 18.9312 13.7652 18.6678 14.3904 18.1989C15.0155 17.7301 15.3667 17.0942 15.3667 16.4312"
            fill={test ? colors.black : '#AAAAAA'}
          />
          <Path
            d="M10.8 12.9C10.8 12.4029 10.3971 12 9.9 12C9.40294 12 9 12.4029 9 12.9C9 13.3971 9.40294 13.8 9.9 13.8C10.3971 13.8 10.8 13.3971 10.8 12.9Z"
            fill={test ? colors.black : '#AAAAAA'}
          />
          <Path
            d="M15 12.9C15 12.4029 14.5971 12 14.1 12C13.6029 12 13.2 12.4029 13.2 12.9C13.2 13.3971 13.6029 13.8 14.1 13.8C14.5971 13.8 15 13.3971 15 12.9Z"
            fill={test ? colors.black : '#AAAAAA'}
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_96_6057">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LoginIcon2;

const styles = StyleSheet.create({});
