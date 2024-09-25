import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Defs,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeOffset,
  Filter,
  G,
  Path,
  Svg,
} from 'react-native-svg';
import {colors} from '../../../globalStyle';

const Heart = () => {
  return (
    <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <G filter="url(#filter0_d_9_2293)">
        <Path
          d="M16 8.38145L11 13.3335L6 8.38145C5.6702 8.06053 5.41043 7.67479 5.23703 7.24854C5.06363 6.82229 4.98037 6.36475 4.99249 5.90474C5.00461 5.44473 5.11184 4.99221 5.30744 4.57568C5.50303 4.15914 5.78275 3.78762 6.12899 3.4845C6.47522 3.18139 6.88047 2.95324 7.3192 2.81444C7.75794 2.67563 8.22067 2.62917 8.67824 2.67799C9.13582 2.7268 9.57833 2.86982 9.97791 3.09806C10.3775 3.32629 10.7255 3.63478 11 4.00412C11.2757 3.63747 11.6241 3.33166 12.0234 3.10585C12.4227 2.88004 12.8643 2.73908 13.3206 2.6918C13.7769 2.64451 14.2381 2.69192 14.6752 2.83105C15.1123 2.97017 15.516 3.19803 15.861 3.50036C16.206 3.80269 16.4849 4.17297 16.6803 4.58805C16.8756 5.00312 16.9832 5.45404 16.9962 5.91259C17.0092 6.37114 16.9275 6.82745 16.7561 7.25295C16.5847 7.67846 16.3273 8.064 16 8.38545"
          stroke={colors.b500}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_9_2293"
          x="-1"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default Heart;

const styles = StyleSheet.create({});
