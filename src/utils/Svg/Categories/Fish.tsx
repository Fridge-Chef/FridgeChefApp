import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Ellipse, G, Mask, Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Fish = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M26.4124 13.2422C26.0353 13.5879 25.4624 13.5698 25.0661 13.2463C22.2819 10.9733 17.302 8.65157 10.7322 9.59012C7.00427 10.1227 4.73108 12.4722 2.85664 14.4095C2.70244 14.5689 2.55094 14.7255 2.40155 14.878C2.24088 15.0421 2.2224 15.2992 2.35944 15.4834C3.8568 17.4967 5.92728 20.2807 10.7322 21.2417C16.1552 22.3263 21.8682 20.1133 25.0249 17.3867C25.4267 17.0397 26.0259 17.0095 26.425 17.3598C27.9421 18.6916 28.9967 21.0279 29.5032 20.5213C30.0098 20.0147 30.2625 18.1943 29.0634 16.3257C28.7875 15.8956 28.6545 15.3372 28.8732 14.8754C29.2907 13.9939 29.7534 12.7859 29.9564 11.5979C30.0968 10.7763 29.9564 9.65941 28.6085 11.0691C27.9029 11.807 27.1196 12.594 26.4124 13.2422Z"
        fill="#8385B2"
      />
      <Mask
        id="mask0_601_11798"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="9"
        width="25"
        height="13">
        <Path
          d="M10.612 9.59012C19.1227 8.37431 24.9653 12.6297 26.8228 15.1626C24.7965 18.7087 17.4722 22.6137 10.612 21.2417C5.54612 20.2285 3.51976 17.189 2 15.1626C4.02635 13.1362 6.38325 10.1942 10.612 9.59012Z"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_601_11798)">
        <Path
          d="M11.2662 22.041C14.5083 16.7725 12.6171 10.7272 11.2662 8.36316L5.18711 11.4027L1.64099 14.9488L2.65417 17.9883L11.2662 22.041Z"
          fill="#D2D3F9"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5012 2.19393C12.4426 2.03896 12.2695 1.96086 12.1145 2.01949C11.9595 2.07812 11.8814 2.25127 11.9401 2.40623C12.2372 3.19161 11.9428 3.75151 11.5798 4.4419L11.5245 4.54725C11.3371 4.90556 11.1389 5.30775 11.0723 5.76526C11.0039 6.23513 11.0762 6.74189 11.3847 7.31273C11.4634 7.4585 11.6454 7.51281 11.7912 7.43404C11.937 7.35528 11.9913 7.17326 11.9125 7.02749C11.6615 6.56297 11.6174 6.18589 11.666 5.85172C11.7165 5.5052 11.869 5.18318 12.0562 4.82541C12.0791 4.7815 12.1027 4.73706 12.1265 4.69205C12.4787 4.02752 12.8966 3.23891 12.5012 2.19393ZM14.1407 2.01949C14.2957 1.96086 14.4688 2.03896 14.5275 2.19393C14.9228 3.23891 14.5049 4.02752 14.1528 4.69205C14.1289 4.73706 14.1054 4.7815 14.0824 4.82541C13.8952 5.18318 13.7427 5.5052 13.6923 5.85172C13.6436 6.18589 13.6877 6.56297 13.9387 7.02749C14.0175 7.17326 13.9632 7.35528 13.8174 7.43404C13.6717 7.51281 13.4896 7.4585 13.4109 7.31273C13.1024 6.74189 13.0301 6.23513 13.0985 5.76526C13.1651 5.30775 13.3633 4.90556 13.5508 4.54725L13.606 4.4419C13.969 3.75151 14.2634 3.19161 13.9663 2.40623C13.9077 2.25127 13.9858 2.07812 14.1407 2.01949ZM15.6387 7.4402C15.4819 7.49353 15.3115 7.40959 15.2581 7.25272C14.8986 6.19491 15.343 5.42096 15.7176 4.76877C15.7429 4.7246 15.768 4.68099 15.7924 4.63789C15.9917 4.28668 16.155 3.97003 16.2172 3.62543C16.2772 3.29311 16.2459 2.91474 16.0108 2.44196C15.937 2.2936 15.9975 2.11353 16.1459 2.03976C16.2942 1.966 16.4743 2.02647 16.5481 2.17483C16.8369 2.75582 16.892 3.26475 16.8076 3.73202C16.7255 4.187 16.5138 4.58222 16.3143 4.93395L16.2554 5.03736C15.8692 5.71502 15.556 6.26459 15.8262 7.05961C15.8795 7.21648 15.7956 7.38688 15.6387 7.4402Z"
        fill="#BECADA"
      />
      <Ellipse
        cx="8.93579"
        cy="14.1383"
        rx="0.8612"
        ry="0.8612"
        fill="#788D9A"
      />
      <Path
        d="M18.0206 11.4027L14.3057 16.4179M20.6742 12.3146L14.8364 20.5213M23.3278 13.6823L19.0821 19.6094M17.6829 20.5213L14.3057 14.9488M20.0952 19.5081L14.7881 10.3895M22.5076 17.9883L18.6478 11.4027M24.4374 16.4686L22.5076 13.4291"
        stroke="#656899"
        strokeWidth="0.4"
        strokeLinecap="round"
      />
      <Path
        d="M22.0305 26.8406H9.96911C9.13644 26.8406 8.46143 27.0334 8.46143 27.2713V28.5636C8.46143 28.8015 9.13644 28.9944 9.96911 28.9944H22.0305C22.8632 28.9944 23.5382 28.8015 23.5382 28.5636V27.2713C23.5382 27.0334 22.8632 26.8406 22.0305 26.8406Z"
        fill="#AFBAC4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9871 24.0017C29.9944 23.9617 29.9986 23.9218 29.9996 23.8818C29.9996 23.8097 29.8767 23.7405 29.6579 23.6895C29.4391 23.6385 29.1424 23.6099 28.833 23.6099H3.16665C2.85724 23.6099 2.56049 23.6385 2.3417 23.6895C2.12291 23.7405 2 23.8097 2 23.8818C2.01054 24.6496 3.18263 25.392 5.31006 25.9784C7.43748 26.5647 10.3839 26.9573 13.631 27.0873C16.8781 27.2172 20.2177 27.076 23.0623 26.6887C25.9069 26.3013 28.0742 25.6925 29.183 24.9694H29.1445C29.369 24.8006 29.556 24.6045 29.7016 24.4256H29.7896C29.8871 24.296 29.9509 24.1651 29.9805 24.0337C29.9874 24.0225 29.9939 24.0117 30 24.0015L29.9871 24.0017Z"
        fill="#DFE4E9"
      />
    </Svg>
  );
};

export default Fish;

const styles = StyleSheet.create({});
