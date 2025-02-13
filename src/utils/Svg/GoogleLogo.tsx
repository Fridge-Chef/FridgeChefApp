import React from 'react';
import {StyleSheet} from 'react-native';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const GoogleLogo = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <G clipPath="url(#clip0_2112_7807)">
        <Path d="M0 0H24V24H0" fill="white" />
        <Path
          d="M7.17188 13.6875C8.57812 17.5313 12.7031 18.1406 15.1875 16.5H18.0938V18.75C17.0585 19.6355 15.8357 20.2743 14.5177 20.6185C13.1996 20.9627 11.8206 21.0031 10.4846 20.7368C9.14861 20.4705 7.89051 19.9044 6.80512 19.0812C5.71974 18.258 4.83539 17.1991 4.21875 15.9844"
          fill="#34A853"
        />
        <Path
          d="M18.0938 18.75C19.1132 17.8021 19.8906 16.5048 20.3316 15.0153C20.7726 13.5259 20.8583 11.9085 20.5781 10.3594H12.1875V13.8281H16.9688C16.75 14.9844 16.1562 15.875 15.1875 16.5"
          fill="#4285F4"
        />
        <Path
          d="M4.21881 15.9844C3.60258 14.7314 3.28296 13.3626 3.28296 11.9766C3.28296 10.5905 3.60258 9.22174 4.21881 7.96875L7.17193 10.2656C6.79693 11.4219 6.79693 12.5625 7.17193 13.6875"
          fill="#FBBC02"
        />
        <Path
          d="M7.17188 10.2654C8.20312 7.03103 12.6094 5.15603 15.5625 7.92166L18.1406 5.39041C14.4844 1.87478 7.35938 2.01541 4.21875 7.96853"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2112_7807">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GoogleLogo;

const styles = StyleSheet.create({});
