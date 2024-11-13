import {StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../../../globalStyle';

const Bowl24 = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15.6 16.8409H8.4C7.90294 16.8409 7.5 17.079 7.5 17.3727V18.9681C7.5 19.2619 7.90294 19.5 8.4 19.5H15.6C16.0971 19.5 16.5 19.2619 16.5 18.9681V17.3727C16.5 17.079 16.0971 16.8409 15.6 16.8409Z"
        fill="#AFBAC4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7412 9.97019C21.7463 9.87131 21.7492 9.77234 21.7499 9.67331C21.7499 9.49474 21.6643 9.32348 21.512 9.19721C21.3596 9.07094 21.1529 9 20.9374 9H3.0625C2.84701 9 2.64035 9.07094 2.48798 9.19721C2.3356 9.32348 2.25 9.49474 2.25 9.67331C2.25734 11.5747 3.07363 13.413 4.55524 14.8649C6.03685 16.3167 8.08887 17.289 10.3502 17.6107C12.6116 17.9324 14.9374 17.583 16.9185 16.6237C18.8996 15.6645 20.409 14.1571 21.1812 12.3666H21.1544C21.3108 11.9485 21.441 11.4629 21.5424 11.0199H21.6037C21.6715 10.6991 21.7159 10.3752 21.7366 10.0501C21.7414 10.022 21.746 9.9952 21.7503 9.96975L21.7412 9.97019Z"
        fill="#DFE4E9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3904 12.0835C18.5703 12.1862 18.6327 12.4153 18.53 12.5951C17.9022 13.6937 15.9082 15.8863 12.8862 15.8863C12.6791 15.8863 12.5112 15.7184 12.5112 15.5113C12.5112 15.3042 12.6791 15.1363 12.8862 15.1363C15.537 15.1363 17.3248 13.1926 17.8788 12.223C17.9816 12.0432 18.2106 11.9807 18.3904 12.0835Z"
        fill="white"
        fillOpacity="0.5"
      />
    </Svg>
  );
};

export default Bowl24;

const styles = StyleSheet.create({});