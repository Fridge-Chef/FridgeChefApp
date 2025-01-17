import React from 'react';
import {StyleSheet} from 'react-native';
import {Circle, Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Info = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Circle cx="8" cy="8" r="7.5" stroke="#2C2C2E" />
      <Path
        d="M7.99618 9.4257L7.99619 9.42569L8.00708 9.41901L7.99618 9.4257ZM7.99618 9.4257C7.99266 9.42786 7.9882 9.42778 7.98476 9.42549C7.98205 9.42368 7.98032 9.42072 7.98008 9.41747L7.573 3.96004C7.55448 3.7117 7.75097 3.5 8 3.5M7.99618 9.4257L8 3.5M8 3.5C8.24903 3.5 8.44552 3.7117 8.427 3.96004M8 3.5L8.427 3.96004M8.427 3.96004L8.02158 9.39523M8.427 3.96004L8.02158 9.39523M8.02158 9.39523C8.02085 9.40502 8.01546 9.41386 8.0071 9.419L8.02158 9.39523Z"
        fill="white"
        stroke="#2C2C2E"
      />
      <Circle cx="8" cy="12" r="0.5" fill="white" stroke="#2C2C2E" />
    </Svg>
  );
};

export default Info;

const styles = StyleSheet.create({});
