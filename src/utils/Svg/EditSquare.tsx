import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../../globalStyle';

type EditSquareProps = {
  focused?: boolean;
};

const EditSquare = ({focused}: EditSquareProps) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9103 22.3691H8.08625C4.64525 22.3691 2.33325 19.9541 2.33325 16.3601V8.04611C2.33325 4.45211 4.64525 2.03711 8.08625 2.03711H11.8253C12.2393 2.03711 12.5753 2.37311 12.5753 2.78711C12.5753 3.20111 12.2393 3.53711 11.8253 3.53711H8.08625C5.50225 3.53711 3.83325 5.30711 3.83325 8.04611V16.3601C3.83325 19.0991 5.50225 20.8691 8.08625 20.8691H16.9103C19.4943 20.8691 21.1643 19.0991 21.1643 16.3601V12.3321C21.1643 11.9181 21.5003 11.5821 21.9143 11.5821C22.3283 11.5821 22.6643 11.9181 22.6643 12.3321V16.3601C22.6643 19.9541 20.3513 22.3691 16.9103 22.3691Z"
        fill={focused ? colors.text : colors.disabled}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.20087 15.4285H12.1779C12.5579 15.4285 12.9139 15.2815 13.1829 15.0125L20.6919 7.50349C20.9999 7.19549 21.1699 6.78549 21.1699 6.34949C21.1699 5.91249 20.9999 5.50149 20.6919 5.19349L19.4749 3.97649C18.8379 3.34149 17.8019 3.34149 17.1639 3.97649L9.69087 11.4495C9.43187 11.7085 9.28487 12.0525 9.27587 12.4175L9.20087 15.4285ZM12.1779 16.9285H8.43187C8.22987 16.9285 8.03587 16.8465 7.89487 16.7015C7.75387 16.5575 7.67687 16.3625 7.68187 16.1595L7.77587 12.3805C7.79487 11.6285 8.09787 10.9215 8.62987 10.3885H8.63087L16.1039 2.91549C17.3259 1.69549 19.3129 1.69549 20.5349 2.91549L21.7519 4.13249C22.3449 4.72449 22.6709 5.51149 22.6699 6.34949C22.6699 7.18749 22.3439 7.97349 21.7519 8.56449L14.2429 16.0735C13.6919 16.6245 12.9579 16.9285 12.1779 16.9285Z"
        fill={focused ? colors.text : colors.disabled}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.064 9.91685C19.872 9.91685 19.68 9.84385 19.534 9.69685L14.968 5.13085C14.675 4.83785 14.675 4.36285 14.968 4.06985C15.261 3.77685 15.735 3.77685 16.028 4.06985L20.594 8.63685C20.887 8.92985 20.887 9.40385 20.594 9.69685C20.448 9.84385 20.256 9.91685 20.064 9.91685Z"
        fill={focused ? colors.text : colors.disabled}
      />
    </Svg>
  );
};

export default EditSquare;

const styles = StyleSheet.create({});
