import {StyleSheet} from 'react-native';
import React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const MyOptionIcon = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Mask
        id="mask0_655_8511"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="14"
        height="15">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33325 1.33398H14.1898V15.148H1.33325V1.33398Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_655_8511)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.80147 11.6273C4.95413 11.6273 5.1068 11.6467 5.25613 11.6867C5.7068 11.808 6.09813 12.1093 6.33013 12.514C6.4808 12.768 6.56413 13.0646 6.5668 13.3673C6.5668 13.8006 6.9148 14.148 7.3428 14.148H8.17813C8.60413 14.148 8.95213 13.8026 8.95413 13.3766C8.95146 12.906 9.13546 12.4587 9.47213 12.122C9.80413 11.79 10.2681 11.5907 10.7321 11.604C11.0361 11.6113 11.3288 11.6933 11.5868 11.84C11.9581 12.0527 12.4321 11.926 12.6468 11.5593L13.0895 10.8213C13.1881 10.6513 13.2168 10.438 13.1641 10.2413C13.1121 10.0447 12.9815 9.87398 12.8055 9.77332C12.3935 9.53598 12.0995 9.15332 11.9775 8.69465C11.8568 8.24465 11.9228 7.75332 12.1581 7.34865C12.3115 7.08198 12.5361 6.85732 12.8055 6.70265C13.1668 6.49132 13.2935 6.01865 13.0835 5.65065C13.0748 5.63598 13.0668 5.62065 13.0601 5.60465L12.6695 4.92732C12.4568 4.55732 11.9835 4.42998 11.6121 4.64132C11.2108 4.87865 10.7335 4.94665 10.2748 4.82598C9.8168 4.70732 9.4328 4.41732 9.19346 4.00798C9.04013 3.75198 8.9568 3.45398 8.95413 3.15065C8.96013 2.92265 8.88013 2.71798 8.7348 2.56798C8.59013 2.41865 8.3868 2.33398 8.17813 2.33398H7.3428C7.13613 2.33398 6.9428 2.41465 6.7968 2.55998C6.65146 2.70598 6.57213 2.89998 6.57346 3.10665C6.55946 4.08132 5.7628 4.86598 4.79813 4.86598C4.4888 4.86265 4.1908 4.77932 3.93213 4.62465C3.5688 4.41798 3.09413 4.54532 2.88147 4.91532L2.43013 5.65732C2.22347 6.01598 2.35013 6.48998 2.71813 6.70398C3.26413 7.01998 3.6048 7.60932 3.6048 8.24132C3.6048 8.87332 3.26413 9.46198 2.7168 9.77865C2.3508 9.99065 2.22413 10.462 2.43613 10.8287L2.8568 11.554C2.9608 11.7413 3.1308 11.8767 3.32747 11.932C3.52347 11.9867 3.73946 11.9633 3.91946 11.8633C4.18413 11.708 4.49213 11.6273 4.80147 11.6273ZM8.17813 15.148H7.3428C6.36346 15.148 5.5668 14.352 5.5668 13.3727C5.56547 13.252 5.5308 13.1266 5.46613 13.018C5.36147 12.8353 5.19213 12.7047 4.9968 12.6527C4.8028 12.6007 4.59013 12.6293 4.41547 12.7306C3.9968 12.964 3.50413 13.0207 3.05347 12.894C2.60347 12.7667 2.2148 12.4573 1.9868 12.0473L1.57013 11.3293C1.0828 10.484 1.3728 9.40065 2.2168 8.91265C2.45613 8.77465 2.6048 8.51732 2.6048 8.24132C2.6048 7.96532 2.45613 7.70732 2.2168 7.56932C1.37213 7.07865 1.0828 5.99265 1.56947 5.14732L2.02147 4.40532C2.50213 3.56932 3.5888 3.27465 4.43613 3.76132C4.55147 3.82998 4.6768 3.86465 4.80413 3.86598C5.21947 3.86598 5.5668 3.52332 5.57347 3.10198C5.5708 2.63732 5.75413 2.19132 6.08813 1.85465C6.42347 1.51865 6.8688 1.33398 7.3428 1.33398H8.17813C8.65547 1.33398 9.11947 1.52998 9.45213 1.87065C9.78413 2.21332 9.96747 2.68332 9.95347 3.15998C9.9548 3.26732 9.99013 3.39132 10.0541 3.49998C10.1601 3.67998 10.3275 3.80665 10.5261 3.85865C10.7248 3.90798 10.9328 3.88132 11.1095 3.77665C11.9628 3.28932 13.0488 3.58132 13.5361 4.42798L13.9515 5.14732C13.9621 5.16665 13.9715 5.18532 13.9795 5.20465C14.4208 6.03865 14.1261 7.08865 13.3061 7.56798C13.1868 7.63665 13.0901 7.73265 13.0235 7.84865C12.9201 8.02798 12.8915 8.24132 12.9435 8.43732C12.9968 8.63732 13.1241 8.80332 13.3035 8.90598C13.7081 9.13865 14.0101 9.53065 14.1308 9.98332C14.2515 10.4353 14.1855 10.926 13.9501 11.3307L13.5075 12.068C13.0201 12.9053 11.9341 13.1953 11.0895 12.7073C10.9768 12.6426 10.8468 12.6073 10.7175 12.604H10.7135C10.5208 12.604 10.3228 12.686 10.1788 12.8293C10.0328 12.9753 9.9528 13.17 9.95413 13.3766C9.94947 14.356 9.1528 15.148 8.17813 15.148Z"
          fill="black"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.76344 6.98242C7.0701 6.98242 6.5061 7.54709 6.5061 8.24042C6.5061 8.93376 7.0701 9.49709 7.76344 9.49709C8.45677 9.49709 9.02077 8.93376 9.02077 8.24042C9.02077 7.54709 8.45677 6.98242 7.76344 6.98242ZM7.76344 10.4971C6.51877 10.4971 5.5061 9.48509 5.5061 8.24042C5.5061 6.99576 6.51877 5.98242 7.76344 5.98242C9.0081 5.98242 10.0208 6.99576 10.0208 8.24042C10.0208 9.48509 9.0081 10.4971 7.76344 10.4971Z"
        fill="black"
      />
    </Svg>
  );
};

export default MyOptionIcon;

const styles = StyleSheet.create({});