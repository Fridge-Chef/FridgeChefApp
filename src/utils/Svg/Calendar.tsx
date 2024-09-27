import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../../globalStyle';

type CalendarProps = {
  day?: string;
  expiryDate?: string;
};

const Calendar = ({day, expiryDate}: CalendarProps) => {
  return (
    <Svg width="23" height="24" viewBox="0 0 23 24" fill="none">
      <Path
        d="M18.2083 4H4.79167C3.73312 4 2.875 4.89543 2.875 6V20C2.875 21.1046 3.73312 22 4.79167 22H18.2083C19.2669 22 20.125 21.1046 20.125 20V6C20.125 4.89543 19.2669 4 18.2083 4Z"
        stroke={
          day
            ? colors.warning
            : expiryDate
            ? colors.secondary[1]
            : colors.subText
        }
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3334 2V6"
        stroke={
          day
            ? colors.warning
            : expiryDate
            ? colors.secondary[1]
            : colors.subText
        }
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.66663 2V6"
        stroke={
          day
            ? colors.warning
            : expiryDate
            ? colors.secondary[1]
            : colors.subText
        }
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.875 10H20.125"
        stroke={
          day
            ? colors.warning
            : expiryDate
            ? colors.secondary[1]
            : colors.subText
        }
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
