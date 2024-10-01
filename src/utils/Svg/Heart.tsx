import {StyleSheet} from 'react-native';
import React from 'react';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Heart = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Mask
        id="mask0_389_10545"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="14"
        height="14">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.3335 2H14.9818V15.0007H1.3335V2Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_389_10545)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.54947 8.08208C3.48413 10.9901 7.1768 13.3414 8.15813 13.9234C9.1428 13.3354 12.8621 10.9581 13.7668 8.08475C14.3608 6.22741 13.8095 3.87475 11.6188 3.16875C10.5575 2.82808 9.31947 3.03541 8.4648 3.69675C8.28613 3.83408 8.03813 3.83675 7.85813 3.70075C6.9528 3.02008 5.77013 2.82075 4.69213 3.16875C2.5048 3.87408 1.95547 6.22675 2.54947 8.08208ZM8.1588 15.0007C8.07613 15.0007 7.99413 14.9807 7.91947 14.9401C7.7108 14.8261 2.79547 12.1167 1.59747 8.38741C1.5968 8.38741 1.5968 8.38675 1.5968 8.38675C0.844801 6.03875 1.68213 3.08808 4.38547 2.21675C5.6548 1.80608 7.03813 1.98675 8.1568 2.69275C9.2408 2.00741 10.6808 1.81808 11.9248 2.21675C14.6308 3.08941 15.4708 6.03941 14.7195 8.38675C13.5601 12.0734 8.6088 14.8234 8.3988 14.9387C8.32413 14.9801 8.24147 15.0007 8.1588 15.0007Z"
          fill="#777777"
        />
      </G>
    </Svg>
  );
};

export default Heart;

const styles = StyleSheet.create({});
