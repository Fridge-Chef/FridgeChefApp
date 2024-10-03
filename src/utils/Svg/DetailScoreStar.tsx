import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailScoreStar = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00027 0.933105C8.15252 0.933105 8.29157 1.01953 8.35895 1.15606L10.326 5.14103L14.7248 5.78398C14.8754 5.80599 15.0005 5.9116 15.0474 6.0564C15.0944 6.2012 15.0551 6.3601 14.946 6.46632L11.7634 9.56619L12.5145 13.9455C12.5403 14.0956 12.4786 14.2472 12.3554 14.3367C12.2322 14.4262 12.0689 14.438 11.9341 14.3671L8.00027 12.2984L4.06645 14.3671C3.93169 14.438 3.76837 14.4262 3.64518 14.3367C3.52199 14.2472 3.46029 14.0956 3.48603 13.9455L4.23713 9.56619L1.05451 6.46632C0.945465 6.3601 0.906156 6.2012 0.953107 6.0564C1.00006 5.9116 1.12513 5.80599 1.27575 5.78398L5.67457 5.14103L7.64159 1.15606C7.70898 1.01953 7.84802 0.933105 8.00027 0.933105Z"
        fill="#FEBF00"
      />
    </Svg>
  );
};

export default DetailScoreStar;

const styles = StyleSheet.create({});