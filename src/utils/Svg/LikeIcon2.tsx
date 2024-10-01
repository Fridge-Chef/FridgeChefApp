import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const LikeIcon2 = () => {
  return (
    <Svg
      width={FWidth * 18}
      height={FWidth * 18}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M5.25 8.25L8.25 1.5C8.84674 1.5 9.41903 1.73705 9.84099 2.15901C10.2629 2.58097 10.5 3.15326 10.5 3.75V6.75H14.745C14.9624 6.74754 15.1778 6.79238 15.3762 6.88141C15.5746 6.97045 15.7512 7.10155 15.8939 7.26564C16.0366 7.42972 16.1419 7.62287 16.2025 7.83169C16.2631 8.04051 16.2776 8.26002 16.245 8.475L15.21 15.225C15.1558 15.5827 14.9741 15.9087 14.6984 16.143C14.4228 16.3773 14.0717 16.5041 13.71 16.5H5.25M5.25 8.25V16.5M5.25 8.25H3C2.60218 8.25 2.22064 8.40804 1.93934 8.68934C1.65804 8.97064 1.5 9.35218 1.5 9.75V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H5.25"
        stroke="#545559"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LikeIcon2;

const styles = StyleSheet.create({});
