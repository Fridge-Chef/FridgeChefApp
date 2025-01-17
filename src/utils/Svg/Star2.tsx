import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Star2 = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M8.00016 1.3335L10.0602 5.50683L14.6668 6.18016L11.3335 9.42683L12.1202 14.0135L8.00016 11.8468L3.88016 14.0135L4.66683 9.42683L1.3335 6.18016L5.94016 5.50683L8.00016 1.3335Z"
        stroke="#777777"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Star2;

const styles = StyleSheet.create({});
