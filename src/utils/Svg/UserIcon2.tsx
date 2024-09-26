import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ClipPath, Defs, G, Mask, Path, Rect, Svg} from 'react-native-svg';

const UserIcon2 = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_53_4351)">
        <Mask
          id="mask0_53_4351"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16">
          <Path
            d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_53_4351)">
          <Path d="M16 0H0V16H16V0Z" fill="#FC846F" />
          <Rect
            x="2.2"
            y="3.59961"
            width="11.6"
            height="20"
            rx="5.8"
            fill="#FFE08C"
          />
          <Path
            d="M5.8 10.9541C5.8 11.3961 6.03413 11.8201 6.45087 12.1326C6.86762 12.4452 7.43285 12.6208 8.02222 12.6208C8.61159 12.6208 9.17682 12.4452 9.59357 12.1326C10.0103 11.8201 10.2444 11.3961 10.2444 10.9541"
            fill="#2C2C2E"
          />
          <Path
            d="M7.2 8.6C7.2 8.26863 6.93137 8 6.6 8C6.26863 8 6 8.26863 6 8.6C6 8.93137 6.26863 9.2 6.6 9.2C6.93137 9.2 7.2 8.93137 7.2 8.6Z"
            fill="#2C2C2E"
          />
          <Path
            d="M10 8.6C10 8.26863 9.73137 8 9.4 8C9.06863 8 8.8 8.26863 8.8 8.6C8.8 8.93137 9.06863 9.2 9.4 9.2C9.73137 9.2 10 8.93137 10 8.6Z"
            fill="#2C2C2E"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_53_4351">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UserIcon2;

const styles = StyleSheet.create({});
