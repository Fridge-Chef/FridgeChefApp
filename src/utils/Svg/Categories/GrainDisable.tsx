import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

const GrainDisable = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G style="mix-blend-mode:luminosity">
        <Rect width="32" height="32" fill="#F6F8FB" />
        <G style="mix-blend-mode:luminosity" opacity="0.6">
          <Path
            d="M22.8907 27.6515C22.8907 27.762 22.9803 27.8515 23.0907 27.8515C23.2012 27.8515 23.2907 27.762 23.2907 27.6515V23.9089C24.8384 23.8582 26.3121 23.2213 27.4105 22.1228C28.5562 20.9771 29.1998 19.4233 29.1998 17.803C29.1998 17.6926 29.1103 17.603 28.9998 17.603C27.3796 17.603 25.8257 18.2467 24.68 19.3923C24.0649 20.0075 23.5945 20.7403 23.2907 21.5379V17.5073C24.8384 17.4567 26.3121 16.8197 27.4105 15.7213C28.5562 14.5756 29.1998 13.0217 29.1998 11.4015C29.1998 11.2911 29.1103 11.2015 28.9998 11.2015C27.3796 11.2015 25.8257 11.8451 24.68 12.9908C24.0649 13.606 23.5945 14.3388 23.2907 15.1364V11.1058C24.8384 11.0552 26.3121 10.4182 27.4105 9.31978C28.5562 8.1741 29.1998 6.62023 29.1998 5C29.1998 4.94696 29.1788 4.89609 29.1412 4.85858C29.1037 4.82107 29.0529 4.8 28.9998 4.8C27.3796 4.8 25.8257 5.44363 24.68 6.58931C24.0649 7.20445 23.5945 7.93727 23.2907 8.73486V5C23.2907 4.88954 23.2012 4.8 23.0907 4.8C22.9803 4.8 22.8907 4.88954 22.8907 5V8.73486C22.587 7.93727 22.1166 7.20445 21.5014 6.58931C20.3557 5.44363 18.8019 4.8 17.1816 4.8C17.1286 4.8 17.0777 4.82107 17.0402 4.85858C17.0027 4.89609 16.9816 4.94696 16.9816 5C16.9816 6.62023 17.6253 8.1741 18.771 9.31978C19.8694 10.4182 21.3431 11.0552 22.8907 11.1058V15.1364C22.587 14.3388 22.1166 13.606 21.5014 12.9908C20.3557 11.8451 18.8019 11.2015 17.1816 11.2015C17.0712 11.2015 16.9816 11.2911 16.9816 11.4015C16.9816 13.0217 17.6253 14.5756 18.771 15.7213C19.8694 16.8197 21.3431 17.4567 22.8907 17.5073V21.5379C22.587 20.7403 22.1166 20.0075 21.5014 19.3923C20.3557 18.2467 18.8019 17.603 17.1816 17.603C17.0712 17.603 16.9816 17.6926 16.9816 17.803C16.9816 19.4233 17.6253 20.9771 18.771 22.1228C19.8694 23.2213 21.3431 23.8582 22.8907 23.9089V27.6515Z"
            fill="#EDB40E"
            stroke="#EDB40E"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M8.70909 27.6515C8.70909 27.762 8.79863 27.8515 8.90909 27.8515C9.01955 27.8515 9.10909 27.762 9.10909 27.6515V23.9089C10.6567 23.8582 12.1304 23.2213 13.2289 22.1228C14.3745 20.9771 15.0182 19.4233 15.0182 17.803C15.0182 17.6926 14.9286 17.603 14.8182 17.603C13.1979 17.603 11.6441 18.2467 10.4984 19.3923C9.88326 20.0075 9.41285 20.7403 9.10909 21.5379V17.5073C10.6567 17.4567 12.1304 16.8197 13.2289 15.7213C14.3745 14.5756 15.0182 13.0217 15.0182 11.4015C15.0182 11.2911 14.9286 11.2015 14.8182 11.2015C13.1979 11.2015 11.6441 11.8451 10.4984 12.9908C9.88326 13.606 9.41285 14.3388 9.10909 15.1364V11.1058C10.6567 11.0552 12.1304 10.4182 13.2289 9.31978C14.3745 8.1741 15.0182 6.62023 15.0182 5C15.0182 4.94696 14.9971 4.89609 14.9596 4.85858C14.9221 4.82107 14.8712 4.8 14.8182 4.8C13.1979 4.8 11.6441 5.44363 10.4984 6.58931C9.88326 7.20445 9.41285 7.93727 9.10909 8.73486V5C9.10909 4.88954 9.01955 4.8 8.90909 4.8C8.79863 4.8 8.70909 4.88954 8.70909 5V8.73486C8.40533 7.93727 7.93492 7.20445 7.31978 6.58931C6.1741 5.44363 4.62023 4.8 3 4.8C2.94696 4.8 2.89609 4.82107 2.85858 4.85858C2.82107 4.89609 2.8 4.94696 2.8 5C2.8 6.62023 3.44364 8.1741 4.58931 9.31978C5.68776 10.4182 7.16145 11.0552 8.70909 11.1058V15.1364C8.40533 14.3388 7.93492 13.606 7.31978 12.9908C6.1741 11.8451 4.62023 11.2015 3 11.2015C2.88954 11.2015 2.8 11.2911 2.8 11.4015C2.8 13.0217 3.44364 14.5756 4.58931 15.7213C5.68776 16.8197 7.16145 17.4567 8.70909 17.5073V21.5379C8.40533 20.7403 7.93492 20.0075 7.31978 19.3923C6.1741 18.2467 4.62023 17.603 3 17.603C2.88954 17.603 2.8 17.6926 2.8 17.803C2.8 19.4233 3.44364 20.9771 4.58931 22.1228C5.68776 23.2213 7.16145 23.8582 8.70909 23.9089V27.6515Z"
            fill="#EDB40E"
            stroke="#EDB40E"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
};

export default GrainDisable;

const styles = StyleSheet.create({});
