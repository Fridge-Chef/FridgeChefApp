import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Close = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8529 6.44621C20.0708 6.1526 20.0466 5.73594 19.7803 5.46967C19.4874 5.17678 19.0126 5.17678 18.7197 5.46967L12.5 11.6893L6.03033 5.21967L5.94621 5.14705C5.6526 4.9292 5.23594 4.9534 4.96967 5.21967L4.89705 5.30379C4.6792 5.5974 4.7034 6.01406 4.96967 6.28033L11.439 12.75L4.96967 19.2197L4.89705 19.3038C4.6792 19.5974 4.7034 20.0141 4.96967 20.2803C5.26256 20.5732 5.73744 20.5732 6.03033 20.2803L12.25 14.0607L18.7197 20.5303L18.8038 20.6029C19.0974 20.8208 19.5141 20.7966 19.7803 20.5303L19.8529 20.4462C20.0708 20.1526 20.0466 19.7359 19.7803 19.4697L13.311 13L19.7803 6.53033L19.8529 6.44621Z"
        fill="#2C2C2E"
      />
    </Svg>
  );
};

export default Close;

const styles = StyleSheet.create({});
