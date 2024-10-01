import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {colors, FWidth} from '../../../globalStyle';

const Heart3 = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Mask
        id="mask0_39_1746"
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
      <G mask="url(#mask0_39_1746)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.18641 12.1026C6.35474 15.7376 10.9706 18.6768 12.1972 19.4043C13.4281 18.6693 18.0772 15.6976 19.2081 12.1059C19.9506 9.78427 19.2614 6.84343 16.5231 5.96093C15.1964 5.5351 13.6489 5.79427 12.5806 6.62093C12.3572 6.7926 12.0472 6.79593 11.8222 6.62593C10.6906 5.7751 9.21224 5.52593 7.86474 5.96093C5.13057 6.8426 4.44391 9.78343 5.18641 12.1026ZM12.1981 20.7509C12.0947 20.7509 11.9922 20.7259 11.8989 20.6751C11.6381 20.5326 5.49391 17.1459 3.99641 12.4843C3.99557 12.4843 3.99557 12.4834 3.99557 12.4834C3.05557 9.54843 4.10224 5.8601 7.48141 4.77093C9.06807 4.2576 10.7972 4.48343 12.1956 5.36593C13.5506 4.50927 15.3506 4.2726 16.9056 4.77093C20.2881 5.86177 21.3381 9.54927 20.3989 12.4834C18.9497 17.0918 12.7606 20.5293 12.4981 20.6734C12.4047 20.7251 12.3014 20.7509 12.1981 20.7509Z"
          fill={colors.b400}
        />
      </G>
    </Svg>
  );
};

export default Heart3;

const styles = StyleSheet.create({});
