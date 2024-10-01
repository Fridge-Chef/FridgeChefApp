import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

type TabHeartProps = {
  focused?: boolean;
};

const TabHeart = ({focused}: TabHeartProps) => {
  return (
    <Svg
      width={FWidth * 25}
      height={FWidth * 25}
      viewBox="0 0 25 24"
      fill="none">
      <Mask
        id="mask0_2113_5127"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="22"
        height="20">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.66675 3H23.1393V22.501H2.66675V3Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_2113_5127)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.49046 12.1231C5.89246 16.4851 11.4315 20.0121 12.9035 20.8851C14.3805 20.0031 19.9595 16.4371 21.3165 12.1271C22.2075 9.34112 21.3805 5.81212 18.0945 4.75312C16.5025 4.24212 14.6455 4.55312 13.3635 5.54512C13.0955 5.75112 12.7235 5.75512 12.4535 5.55112C11.0955 4.53012 9.32146 4.23112 7.70446 4.75312C4.42346 5.81112 3.59946 9.34012 4.49046 12.1231ZM12.9045 22.5011C12.7805 22.5011 12.6575 22.4711 12.5455 22.4101C12.2325 22.2391 4.85946 18.1751 3.06246 12.5811C3.06146 12.5811 3.06146 12.5801 3.06146 12.5801C1.93346 9.05812 3.18946 4.63212 7.24446 3.32512C9.14846 2.70912 11.2235 2.98012 12.9015 4.03912C14.5275 3.01112 16.6875 2.72712 18.5535 3.32512C22.6125 4.63412 23.8725 9.05912 22.7455 12.5801C21.0065 18.1101 13.5795 22.2351 13.2645 22.4081C13.1525 22.4701 13.0285 22.5011 12.9045 22.5011Z"
          fill={focused ? colors.text : colors.disabled}
        />
      </G>
    </Svg>
  );
};

export default TabHeart;

const styles = StyleSheet.create({});
