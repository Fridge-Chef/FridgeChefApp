import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const AppleIcon = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <G style="mix-blend-mode:luminosity" opacity="0.6">
        <Path
          d="M15.8357 4.47117C14.8979 3.65103 13.8259 2.99837 12.6668 2.54172C10.8012 1.77506 9.42125 1.82617 8.57791 2.6695C6.71236 4.53506 9.3318 8.84117 10.3796 9.88895C11.1827 10.6379 12.1633 11.17 13.229 11.4351C13.6469 11.5407 14.0758 11.5965 14.5068 11.6012C14.9023 11.6187 15.2974 11.5564 15.6683 11.4181C16.0393 11.2798 16.3787 11.0683 16.6662 10.7962C18.3657 9.17339 17.2668 5.91506 15.8357 4.47117Z"
          fill="#AAD466"
        />
        <Path
          d="M16.5 28.7683C18.3158 28.7683 17.1053 29.9789 20.7368 29.9789C24.3684 29.9789 28 22.7157 28 17.8736C28 13.0315 24.9737 9.3999 21.3421 9.3999C17.7105 9.3999 17.7105 10.6104 16.5 10.6104C15.2895 10.6104 15.2895 9.3999 11.6579 9.3999C8.02632 9.3999 5 13.0315 5 17.8736C5 22.7157 8.63158 29.9789 12.2632 29.9789C15.8947 29.9789 14.6842 28.7683 16.5 28.7683Z"
          fill="#FA766E"
        />
        <Path
          d="M16.4996 12.483C16.1607 12.483 15.8357 12.3484 15.5961 12.1088C15.3564 11.8691 15.2218 11.5441 15.2218 11.2052C15.2218 6.91191 17.4707 3.53857 20.3329 3.53857C20.6718 3.53857 20.9968 3.6732 21.2364 3.91283C21.4761 4.15246 21.6107 4.47746 21.6107 4.81635C21.6107 5.15524 21.4761 5.48025 21.2364 5.71988C20.9968 5.95951 20.6718 6.09413 20.3329 6.09413C19.1318 6.09413 17.7774 8.27913 17.7774 11.2052C17.7774 11.5441 17.6427 11.8691 17.4031 12.1088C17.1635 12.3484 16.8385 12.483 16.4996 12.483Z"
          fill="#628205"
        />
      </G>
    </Svg>
  );
};

export default AppleIcon;

const styles = StyleSheet.create({});