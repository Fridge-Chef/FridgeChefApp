import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

type BottomButtonProps = {
  buttonHeight: number;
};

const BottomButton = ({buttonHeight}: BottomButtonProps) => {
  return (
    <Svg
      width={buttonHeight}
      height={buttonHeight}
      viewBox="0 0 32 32"
      fill="none">
      <Rect width="32" height="32" rx="16" fill="white" />
      <Rect width="32" height="32" rx="16" fill="#F4F6FA" />
      <Path
        d="M12.6666 22.667L19.3333 16.0003L12.6666 9.33366"
        stroke="#111111"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default BottomButton;

const styles = StyleSheet.create({});
