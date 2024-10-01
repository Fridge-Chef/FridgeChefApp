import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

const Heart2 = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Mask
        id="mask0_9_2277"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="3"
        y="4"
        width="18"
        height="17">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.66669 4.5H20.7271V20.7508H3.66669V4.5Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_9_2277)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1981 20.7509C12.0947 20.7509 11.9922 20.7259 11.8989 20.6751C11.6381 20.5326 5.49391 17.1459 3.99641 12.4843C3.99557 12.4843 3.99557 12.4834 3.99557 12.4834C3.05557 9.54843 4.10224 5.8601 7.48141 4.77093C9.06807 4.2576 10.7972 4.48343 12.1956 5.36593C13.5506 4.50927 15.3506 4.2726 16.9056 4.77093C20.2881 5.86177 21.3381 9.54927 20.3989 12.4834C18.9497 17.0918 12.7606 20.5293 12.4981 20.6734C12.4047 20.7251 12.3014 20.7509 12.1981 20.7509Z"
          fill={colors.primary[1]}
        />
      </G>
    </Svg>
  );
};

export default Heart2;

const styles = StyleSheet.create({});
