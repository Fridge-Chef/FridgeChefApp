import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Ellipse, G, Mask, Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const SeafoodDisable = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <G style="mix-blend-mode:luminosity">
        <G style="mix-blend-mode:luminosity">
          <Path
            d="M22.1476 4.28249C22.2855 4.28931 22.4029 4.18305 22.4097 4.04515C22.4165 3.90724 22.3103 3.78992 22.1724 3.7831L22.1476 4.28249ZM6.1286 9.01187C5.22501 9.43965 4.43516 9.42345 3.81338 9.17465C3.18619 8.92369 2.71066 8.42832 2.45621 7.86659C2.20089 7.30294 2.17756 6.69626 2.415 6.21613C2.64752 5.74595 3.15502 5.34763 4.06834 5.2403L4.00998 4.74372C2.96665 4.86632 2.28991 5.34114 1.96681 5.99449C1.64862 6.63789 1.69827 7.40511 2.00076 8.0729C2.30411 8.7426 2.8712 9.33619 3.62763 9.63887C4.38949 9.94372 5.32428 9.94585 6.34254 9.46378L6.1286 9.01187ZM4.06834 5.2403C7.97705 4.78099 18.2959 4.09191 22.1476 4.28249L22.1724 3.7831C18.2791 3.59047 7.92788 4.28333 4.00998 4.74372L4.06834 5.2403Z"
            fill="#8E8E8E"
          />
          <Path
            d="M21.9657 22.3088C24.0966 22.3088 26.1402 21.4623 27.6469 19.9556C29.1536 18.4489 30.0001 16.4053 30.0001 14.2744C30.0001 12.1436 29.1536 10.1 27.6469 8.59327C26.1402 7.08652 24.0966 6.24005 21.9657 6.24005H5.89697C5.82283 6.2408 5.74957 6.25635 5.68151 6.28579C5.61345 6.31521 5.55195 6.35793 5.50061 6.41145C5.45157 6.46669 5.414 6.53111 5.3901 6.601C5.36619 6.67089 5.35642 6.74483 5.36135 6.81853C5.50782 8.84756 6.41852 10.7455 7.90968 12.1293C9.40084 13.5131 11.3614 14.2797 13.3957 14.2744H21.9657V22.3088Z"
            fill="#A6A6A6"
          />
          <Path
            d="M21.9657 22.3088L13.9313 22.3088C13.9183 21.5315 14.0618 20.7595 14.3532 20.0387C14.6447 19.318 15.0782 18.6634 15.628 18.1136C16.1776 17.5638 16.8324 17.1304 17.5531 16.8389C18.2739 16.5474 19.0459 16.4039 19.8232 16.417H21.9657"
            fill="#A6A6A6"
          />
          <Path
            d="M21.9657 14.2744C21.9657 13.0271 21.6754 11.797 21.1176 10.6813C20.5598 9.56573 19.7499 8.5953 18.752 7.84693L16.6095 6.24005"
            fill="#A6A6A6"
          />
          <Path d="M21.9657 14.2744H30.0001Z" fill="#A6A6A6" />
          <Path d="M21.9657 14.2744L27.6434 8.59675Z" fill="#A6A6A6" />
          <Path d="M27.6434 19.9521L21.9657 14.2744Z" fill="#A6A6A6" />
          <Path
            d="M13.6636 9.4538C13.5157 9.4538 13.3958 9.33389 13.3958 9.18599C13.3958 9.03808 13.5157 8.91818 13.6636 8.91818"
            fill="#A6A6A6"
          />
          <Path
            d="M13.6636 9.4538C13.8115 9.4538 13.9314 9.33389 13.9314 9.18599C13.9314 9.03808 13.8115 8.91818 13.6636 8.91818"
            fill="#A6A6A6"
          />
          <Path
            d="M13.9839 28.0184V21.3755C13.9839 21.3682 13.9914 21.3634 13.998 21.3664L20.0439 24.1146C20.055 24.1196 20.0492 24.1398 20.0372 24.1375C19.3517 24.0073 15.544 23.5049 14.0041 28.0201C14.0004 28.0308 13.9839 28.0297 13.9839 28.0184Z"
            fill="#A6A6A6"
          />
          <Mask
            id="mask0_790_11812"
            maskType="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="6"
            width="25"
            height="17">
            <Path
              d="M21.9657 22.3088C24.0966 22.3088 26.1402 21.4623 27.6469 19.9556C29.1536 18.4489 30.0001 16.4053 30.0001 14.2744C30.0001 12.1436 29.1536 10.1 27.6469 8.59327C26.1402 7.08652 24.0966 6.24005 21.9657 6.24005H5.89697C5.82283 6.2408 5.74957 6.25635 5.68151 6.28579C5.61345 6.31521 5.55195 6.35793 5.50061 6.41145C5.45157 6.46669 5.414 6.53111 5.3901 6.601C5.36619 6.67089 5.35642 6.74483 5.36135 6.81853C5.50782 8.84756 6.41852 10.7455 7.90968 12.1293C9.40084 13.5131 11.3614 14.2797 13.3957 14.2744H21.9657V22.3088Z"
              fill="#FE8455"
            />
            <Path
              d="M21.9657 22.3088L16.2558 22.3088C14.9658 22.3088 13.8696 21.2347 14.3532 20.0387V20.0387C14.6447 19.318 15.0782 18.6634 15.628 18.1136C16.1776 17.5638 16.8324 17.1304 17.5531 16.8389C18.2739 16.5474 19.0459 16.4039 19.8232 16.417H21.9657"
              fill="#FE8455"
            />
            <Path
              d="M21.9657 14.2744C21.9657 13.0271 21.6754 11.797 21.1176 10.6813C20.5598 9.56573 19.7499 8.5953 18.752 7.84693L16.6095 6.24005"
              fill="#FE8455"
            />
            <Path d="M21.9657 14.2744H30.0001Z" fill="#FE8455" />
            <Path d="M21.9657 14.2744L27.6434 8.59675Z" fill="#FE8455" />
            <Path d="M27.6434 19.9521L21.9657 14.2744Z" fill="#FE8455" />
            <Path
              d="M13.6636 9.4538C13.5157 9.4538 13.3958 9.33389 13.3958 9.18599C13.3958 9.03808 13.5157 8.91818 13.6636 8.91818"
              fill="#FE8455"
            />
            <Path
              d="M13.6636 9.4538C13.8115 9.4538 13.9314 9.33389 13.9314 9.18599C13.9314 9.03808 13.8115 8.91818 13.6636 8.91818"
              fill="#FE8455"
            />
          </Mask>
          <G mask="url(#mask0_790_11812)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1771 6.00301C16.0342 5.91726 15.8488 5.96361 15.763 6.10653C15.6773 6.24946 15.7236 6.43484 15.8665 6.52059L18.8711 8.32331C19.9044 9.10098 20.6904 10.0294 21.2677 11.1838C21.8479 12.3444 22.15 13.6241 22.15 14.9217V23.3511C22.15 23.5178 22.2851 23.6529 22.4518 23.6529C22.6185 23.6529 22.7536 23.5178 22.7536 23.3511V15.6159L28.4915 20.9688C28.6133 21.0825 28.8043 21.0759 28.918 20.954C29.0317 20.8321 29.0251 20.6411 28.9032 20.5274L23.2177 15.2235H30.8854C31.052 15.2235 31.1872 15.0883 31.1872 14.9217C31.1872 14.755 31.052 14.6199 30.8854 14.6199H23.2361L28.8996 9.50374C29.0233 9.39201 29.033 9.20117 28.9213 9.07748C28.8096 8.95379 28.6187 8.9441 28.495 9.05583L22.7294 14.2641C22.6438 13.1 22.3314 11.9617 21.8075 10.9139C21.1846 9.668 20.3325 8.66487 19.2209 7.83115C19.2126 7.82493 19.204 7.81914 19.1951 7.8138L16.1771 6.00301Z"
              fill="#D2D2D2"
            />
            <Ellipse
              cx="12.6401"
              cy="9.03992"
              rx="0.56"
              ry="0.56"
              fill="#8E8E8E"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default SeafoodDisable;

const styles = StyleSheet.create({});