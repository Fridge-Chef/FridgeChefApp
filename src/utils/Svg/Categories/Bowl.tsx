import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Bowl = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M20.8 22.4545H11.2C10.5373 22.4545 10 22.772 10 23.1636V25.2909C10 25.6825 10.5373 26 11.2 26H20.8C21.4627 26 22 25.6825 22 25.2909V23.1636C22 22.772 21.4627 22.4545 20.8 22.4545Z"
        fill="#AFBAC4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9883 13.2936C28.9951 13.1617 28.9989 13.0298 28.9999 12.8978C28.9999 12.6597 28.8858 12.4313 28.6826 12.2629C28.4794 12.0946 28.2039 12 27.9166 12H4.08333C3.79601 12 3.52046 12.0946 3.3173 12.2629C3.11414 12.4313 3 12.6597 3 12.8978C3.00979 15.4329 4.09817 17.8841 6.07366 19.8198C8.04914 21.7556 10.7852 23.052 13.8003 23.481C16.8155 23.9099 19.9166 23.4439 22.558 22.165C25.1995 20.886 27.212 18.8761 28.2416 16.4888H28.2059C28.4144 15.9314 28.5881 15.2838 28.7232 14.6933H28.8049C28.8954 14.2654 28.9546 13.8336 28.9821 13.4002C28.9886 13.3627 28.9947 13.3269 29.0004 13.293L28.9883 13.2936Z"
        fill="#DFE4E9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5206 16.1113C24.7604 16.2483 24.8436 16.5537 24.7066 16.7935C23.8696 18.2583 21.2109 21.1818 17.1816 21.1818C16.9055 21.1818 16.6816 20.9579 16.6816 20.6818C16.6816 20.4056 16.9055 20.1818 17.1816 20.1818C20.716 20.1818 23.0997 17.5901 23.8384 16.2974C23.9754 16.0576 24.2808 15.9743 24.5206 16.1113Z"
        fill="white"
        fillOpacity="0.5"
      />
    </Svg>
  );
};

export default Bowl;

const styles = StyleSheet.create({});
