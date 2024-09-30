import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';

const Send = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Mask
        id="mask0_76_5803"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="20"
        height="20">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3H21.499V22.499H2V3Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_76_5803)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8049 14.8175L14.4619 20.7505C14.6219 21.0105 14.8719 21.0075 14.9729 20.9935C15.0739 20.9795 15.3169 20.9175 15.4049 20.6225L19.9779 5.17753C20.0579 4.90453 19.9109 4.71853 19.8449 4.65253C19.7809 4.58653 19.5979 4.44553 19.3329 4.52053L3.87691 9.04653C3.58391 9.13253 3.51991 9.37853 3.50591 9.47953C3.49191 9.58253 3.48791 9.83753 3.74691 10.0005L9.74791 13.7535L15.0499 8.39553C15.3409 8.10153 15.8159 8.09853 16.1109 8.38953C16.4059 8.68053 16.4079 9.15653 16.1169 9.45053L10.8049 14.8175ZM14.8949 22.4995C14.1989 22.4995 13.5609 22.1455 13.1849 21.5375L9.30791 15.2465L2.95191 11.2715C2.26691 10.8425 1.90891 10.0785 2.01991 9.27553C2.12991 8.47253 2.68091 7.83453 3.45491 7.60753L18.9109 3.08153C19.6219 2.87353 20.3839 3.07053 20.9079 3.59253C21.4319 4.11953 21.6269 4.88953 21.4149 5.60353L16.8419 21.0475C16.6129 21.8245 15.9729 22.3735 15.1719 22.4805C15.0779 22.4925 14.9869 22.4995 14.8949 22.4995Z"
          fill="black"
        />
      </G>
    </Svg>
  );
};

export default Send;

const styles = StyleSheet.create({});