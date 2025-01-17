import React from 'react';
import {StyleSheet} from 'react-native';
import {ClipPath, Defs, G, Mask, Path, Rect, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailUserBadge = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <G clip-path="url(#clip0_518_2818)">
        <Mask
          id="mask0_518_2818"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16">
          <Path
            d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_518_2818)">
          <Path d="M16 0H0V16H16V0Z" fill="#4F4F68" />
          <Path
            d="M4.57795 5.2941L6.14018 6.33558L7.6972 4.1559C7.73161 4.10768 7.77703 4.06838 7.8297 4.04126C7.88236 4.01415 7.94074 4 7.99998 4C8.05921 4 8.11759 4.01415 8.17025 4.04126C8.22292 4.06838 8.26834 4.10768 8.30275 4.1559L9.85977 6.33558L11.422 5.2941C11.4811 5.25476 11.5503 5.23317 11.6213 5.23188C11.6923 5.23059 11.7622 5.24965 11.8227 5.28682C11.8832 5.32398 11.9318 5.37768 11.9628 5.44159C11.9937 5.5055 12.0058 5.57694 11.9974 5.64746L11.3863 10.8426C11.3756 10.9331 11.3321 11.0165 11.2641 11.0771C11.196 11.1376 11.108 11.171 11.0169 11.1711H4.98301C4.89191 11.171 4.80397 11.1376 4.73589 11.0771C4.66781 11.0165 4.62432 10.9331 4.61366 10.8426L4.00253 5.64709C3.99427 5.57659 4.00635 5.50521 4.03735 5.44136C4.06835 5.37751 4.11696 5.32387 4.17746 5.28676C4.23796 5.24964 4.30782 5.23061 4.37878 5.23191C4.44974 5.23322 4.51885 5.25479 4.57795 5.2941Z"
            fill="#F2FF00"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_518_2818">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DetailUserBadge;

const styles = StyleSheet.create({});
