import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

type TabHeartProps = {
  focused?: boolean;
};

const TabHeart = ({focused}: TabHeartProps) => {
  return (
    <Svg
      width={FWidth * 25}
      height={FWidth * 25}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M11.8447 5.24606C11.9853 5.38671 12.1761 5.46573 12.375 5.46573C12.5739 5.46573 12.7647 5.38671 12.9053 5.24606C14.9001 3.25131 18.1342 3.25131 20.1289 5.24606C22.1237 7.2408 22.1237 10.4749 20.1289 12.4697L13.2589 19.3397C12.7707 19.8279 11.9793 19.8279 11.4911 19.3397L4.62106 12.4697C2.62631 10.4749 2.62631 7.2408 4.62106 5.24606C6.6158 3.25131 9.84993 3.25131 11.8447 5.24606Z"
        stroke={focused ? colors.text : colors.disabled}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TabHeart;

const styles = StyleSheet.create({});
