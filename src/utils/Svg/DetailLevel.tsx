import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailLevel = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M4.12499 10.5176V10.0899L3.70248 10.0236C2.45464 9.82785 1.5 8.74709 1.5 7.4443C1.5 6.00227 2.669 4.83328 4.11102 4.83328C4.20109 4.83328 4.28993 4.83782 4.37737 4.84666L4.74164 4.88348L4.88672 4.54732C5.4069 3.34203 6.60557 2.5 7.99977 2.5C9.39398 2.5 10.5927 3.34205 11.1128 4.54735L11.2579 4.88357L11.6223 4.84669C11.7098 4.83783 11.7988 4.83327 11.889 4.83327C13.331 4.83327 14.5 6.00227 14.5 7.44429C14.5 8.74717 13.5452 9.82798 12.2973 10.0237L11.8747 10.0899V10.5176V13.5747H4.12499V10.5176Z"
        stroke="#777777"
      />
    </Svg>
  );
};

export default DetailLevel;

const styles = StyleSheet.create({});
