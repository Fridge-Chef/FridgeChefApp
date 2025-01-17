import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const KakaoLogo = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 4C7.02945 4 3 7.17725 3 11.0962C3 13.6298 4.68446 15.8531 7.21841 17.1085C7.08083 17.5838 6.33275 20.1671 6.303 20.37C6.303 20.37 6.28508 20.5224 6.38379 20.5806C6.4825 20.6387 6.59845 20.5938 6.59845 20.5938C6.88172 20.5542 9.88217 18.4465 10.4014 18.0808C10.9203 18.1541 11.4544 18.1923 12 18.1923C16.9706 18.1923 21 15.0154 21 11.0962C21 7.17725 16.9706 4 12 4Z"
        fill="black"
      />
    </Svg>
  );
};

export default KakaoLogo;

const styles = StyleSheet.create({});
