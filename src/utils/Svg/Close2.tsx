import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

type Close2Props = {
  iconColor?: ColorValue;
};

const Close2 = ({iconColor = 'black'}: Close2Props) => {
  return (
    <Svg
      width={FWidth * 18}
      height={FWidth * 18}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8897 4.83466C15.0531 4.61445 15.0349 4.30195 14.8352 4.10225C14.6156 3.88258 14.2594 3.88258 14.0398 4.10225L9.375 8.76701L4.52275 3.91475L4.45966 3.86029C4.23945 3.6969 3.92695 3.71505 3.72725 3.91475L3.67279 3.97784C3.5094 4.19805 3.52755 4.51055 3.72725 4.71025L8.57925 9.5625L3.72725 14.4148L3.67279 14.4778C3.5094 14.698 3.52755 15.0105 3.72725 15.2102C3.94692 15.4299 4.30308 15.4299 4.52275 15.2102L9.1875 10.5455L14.0398 15.3977L14.1028 15.4522C14.323 15.6156 14.6355 15.5974 14.8352 15.3977L14.8897 15.3347C15.0531 15.1145 15.0349 14.802 14.8352 14.6023L9.98325 9.75L14.8352 4.89775L14.8897 4.83466Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default Close2;

const styles = StyleSheet.create({});
