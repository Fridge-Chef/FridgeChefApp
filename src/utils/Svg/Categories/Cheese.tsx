import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Cheese = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <G style="mix-blend-mode:luminosity" opacity="0.6">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 24.9903V27.7501L29 25.1501V14.1001L3 17.3501V21.6464C3.68867 21.8897 4.1821 22.5464 4.1821 23.3184C4.1821 24.0904 3.68867 24.7471 3 24.9903Z"
          fill="#FDD02F"
        />
        <Path
          d="M3 17.35L17.3 5C26.66 5.52 29 11.2833 29 14.1L3 17.35Z"
          fill="#FFE351"
        />
        <Path
          d="M23.5684 19.8627C24.3516 19.8627 24.9865 19.2279 24.9865 18.4445C24.9865 17.6613 24.3516 17.0264 23.5684 17.0264C22.7852 17.0264 22.1502 17.6613 22.1502 18.4445C22.1502 19.2279 22.7852 19.8627 23.5684 19.8627Z"
          fill="#FFF4D1"
        />
        <Path
          d="M9.032 20.8082C9.55416 20.8082 9.97746 20.3849 9.97746 19.8627C9.97746 19.3407 9.55416 18.9173 9.032 18.9173C8.50985 18.9173 8.08655 19.3407 8.08655 19.8627C8.08655 20.3849 8.50985 20.8082 9.032 20.8082Z"
          fill="#FFF4D1"
        />
        <Path
          d="M13.7593 24.2355C14.8036 24.2355 15.6502 23.3889 15.6502 22.3445C15.6502 21.3003 14.8036 20.4536 13.7593 20.4536C12.715 20.4536 11.8684 21.3003 11.8684 22.3445C11.8684 23.3889 12.715 24.2355 13.7593 24.2355Z"
          fill="#FFF4D1"
        />
        <Path
          d="M18.5995 18.65C18.5995 19.009 18.3085 19.3 17.9495 19.3C17.5905 19.3 17.2995 19.009 17.2995 18.65C17.2995 18.291 17.5905 18 17.9495 18C18.3085 18 18.5995 18.291 18.5995 18.65Z"
          fill="#FFF4D1"
        />
      </G>
    </Svg>
  );
};

export default Cheese;

const styles = StyleSheet.create({});