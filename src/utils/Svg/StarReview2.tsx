import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const StarReview2 = () => {
  return (
    <Svg
      width={FWidth * 28}
      height={FWidth * 28}
      viewBox="0 0 28 28"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 1.63333C14.2664 1.63333 14.5098 1.78458 14.6277 2.02349L18.07 8.99719L25.7679 10.1224C26.0315 10.1609 26.2504 10.3457 26.3325 10.5991C26.4147 10.8525 26.3459 11.1306 26.1551 11.3164L20.5855 16.7412L21.8999 24.405C21.945 24.6676 21.837 24.9331 21.6214 25.0897C21.4058 25.2463 21.12 25.2669 20.8842 25.1429L14 21.5226L7.1158 25.1429C6.87996 25.2669 6.59416 25.2463 6.37857 25.0897C6.16299 24.9331 6.05502 24.6676 6.10006 24.405L7.41449 16.7412L1.84491 11.3164C1.65408 11.1306 1.58528 10.8525 1.66745 10.5991C1.74961 10.3457 1.96849 10.1609 2.23208 10.1224L9.93001 8.99719L13.3723 2.02349C13.4902 1.78458 13.7336 1.63333 14 1.63333Z"
        fill="#FEBF00"
      />
    </Svg>
  );
};

export default StarReview2;

const styles = StyleSheet.create({});
