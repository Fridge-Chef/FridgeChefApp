import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Rect, Svg} from 'react-native-svg';
import {colors} from '../../../globalStyle';

type WalletProps = {
  focused: boolean;
};

const Wallet = ({focused}: WalletProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Mask
        id="mask0_2113_1069"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="22"
        height="20">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 3H23.1386V22.1729H2.5V3Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_2113_1069)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.49751 4.5C6.01751 4.5 3.99951 6.518 3.99951 8.998V16.175C3.99951 18.655 6.01751 20.673 8.49751 20.673H17.1415C19.6215 20.673 21.6385 18.655 21.6385 16.175V8.998C21.6385 6.518 19.6215 4.5 17.1415 4.5H8.49751ZM17.1415 22.173H8.49751C5.19051 22.173 2.49951 19.482 2.49951 16.175V8.998C2.49951 5.69 5.19051 3 8.49751 3H17.1415C20.4485 3 23.1385 5.69 23.1385 8.998V16.175C23.1385 19.482 20.4485 22.173 17.1415 22.173Z"
          fill={focused ? colors.text : colors.disabled}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.649 12.5H4.25C3.836 12.5 3.5 12.164 3.5 11.75C3.5 11.336 3.836 11 4.25 11H21.649C22.063 11 22.399 11.336 22.399 11.75C22.399 12.164 22.063 12.5 21.649 12.5Z"
        fill={focused ? colors.text : colors.disabled}
      />
      <Rect
        x="7"
        y="8"
        width="3"
        height="8"
        rx="1.5"
        fill="white"
        stroke={focused ? colors.text : colors.disabled}
        strokeWidth="1.4"
      />
    </Svg>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
