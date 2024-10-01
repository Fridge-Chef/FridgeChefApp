import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Bowl = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M20 19H12C11.4477 19 11 19.4477 11 20V23C11 23.5523 11.4477 24 12 24H20C20.5523 24 21 23.5523 21 23V20C21 19.4477 20.5523 19 20 19Z"
        fill="#BFBBBB"
      />
      <Path
        d="M19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.7348 18.1054 11.4804 18.2929 11.2929C18.4804 11.1054 18.7348 11 19 11H27.82C27.9358 10.3395 27.996 9.67052 28 9C28 8.73478 27.8946 8.48043 27.7071 8.29289C27.5196 8.10536 27.2652 8 27 8H5C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4.00903 11.8239 5.0137 14.5542 6.83723 16.7105C8.66076 18.8667 11.1863 20.3108 13.9696 20.7886C16.7528 21.2664 19.6154 20.7473 22.0536 19.3227C24.4919 17.8981 26.3496 15.6592 27.3 13H19Z"
        fill="#E5E5E5"
      />
    </Svg>
  );
};

export default Bowl;

const styles = StyleSheet.create({});
