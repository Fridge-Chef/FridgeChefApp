import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Heart4 = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Mask
        id="mask0_76_5793"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="21"
        height="20">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3H22.4725V22.501H2V3Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_76_5793)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.82371 12.1231C5.22571 16.4851 10.7647 20.0121 12.2367 20.8851C13.7137 20.0031 19.2927 16.4371 20.6497 12.1271C21.5407 9.34112 20.7137 5.81212 17.4277 4.75312C15.8357 4.24212 13.9787 4.55312 12.6967 5.54512C12.4287 5.75112 12.0567 5.75512 11.7867 5.55112C10.4287 4.53012 8.65471 4.23112 7.03771 4.75312C3.75671 5.81112 2.93271 9.34012 3.82371 12.1231ZM12.2377 22.5011C12.1137 22.5011 11.9907 22.4711 11.8787 22.4101C11.5657 22.2391 4.19271 18.1751 2.39571 12.5811C2.39471 12.5811 2.39471 12.5801 2.39471 12.5801C1.26671 9.05812 2.52271 4.63212 6.57771 3.32512C8.48171 2.70912 10.5567 2.98012 12.2347 4.03912C13.8607 3.01112 16.0207 2.72712 17.8867 3.32512C21.9457 4.63412 23.2057 9.05912 22.0787 12.5801C20.3397 18.1101 12.9127 22.2351 12.5977 22.4081C12.4857 22.4701 12.3617 22.5011 12.2377 22.5011Z"
          fill="black"
        />
      </G>
    </Svg>
  );
};

export default Heart4;

const styles = StyleSheet.create({});
