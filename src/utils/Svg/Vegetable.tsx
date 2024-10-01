import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const Vegetable = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M21.6602 5.64546C20.0025 4.77736 19.1298 6.10702 18.4867 7.82881C18.2659 8.42718 18.2131 9.09806 18.3348 9.76069L16.0214 9.77399C15.5638 9.94973 17.4291 10.2268 17.0837 10.5892C16.7383 10.9516 16.4677 11.3921 16.2877 11.8852C16.1077 12.3784 16.0218 12.9144 16.0349 13.4623C16.0481 14.0102 16.16 14.5591 16.3643 15.0773C15.8708 15.4178 15.4899 15.9168 15.2675 16.5144C14.6172 18.269 15.1736 20.907 16.823 21.7708C17.1633 21.9365 17.5244 22.0289 17.8854 22.0427C18.2465 22.0564 18.6003 21.9912 18.9263 21.8508C19.9209 21.4551 20.7101 20.6467 21.136 19.5875C21.3568 18.9891 21.4096 18.3182 21.2879 17.6556C22.217 17.3005 21.8099 16.5434 22.1864 15.5485C22.3701 15.0538 22.4588 14.5151 22.4472 13.964C22.4357 13.4129 22.3241 12.8604 22.119 12.3389C22.6125 11.9985 22.9933 11.4994 23.2158 10.9019C23.8506 9.17576 23.3097 6.50922 21.6602 5.64546Z"
        fill="#ABD72E"
      />
      <Path
        d="M15.2675 5.64557C13.6321 5.84907 12.8189 7.81647 13.1966 9.3814C13.3298 9.92392 13.6212 10.4346 14.0357 10.852L14.017 10.8789C13.7698 11.2349 13.6046 11.642 13.5309 12.0766C13.4573 12.5111 13.4766 12.9646 13.5878 13.4107C13.6991 13.8569 13.9 14.2868 14.179 14.6758C14.4579 15.0647 14.8094 15.4049 15.2131 15.6766C15.0208 16.1695 14.9885 16.7205 15.1201 17.2632C15.5087 18.8555 17.2113 20.4811 18.8386 20.2787C19.1681 20.2279 19.4768 20.1138 19.7468 19.9429C20.0167 19.772 20.2426 19.5478 20.4113 19.2831C20.9418 18.4995 21.1197 17.5207 20.9094 16.5428C20.7762 16.0003 20.4848 15.4896 20.0703 15.0722C20.5731 14.3507 20.7347 13.4374 20.5201 12.5307C20.4108 12.0815 20.2106 11.6483 19.9312 11.2563C19.6518 10.8642 19.2988 10.5213 18.8929 10.2476C19.0852 9.75471 19.1175 9.20374 18.9859 8.66102C18.6 7.09711 16.8947 5.44309 15.2675 5.64557Z"
        fill="#ABD72E"
      />
      <Path
        d="M27.342 11.7315C26.6023 10.2689 24.4707 10.1802 23.118 11.0695C22.6498 11.3799 22.2647 11.8276 22.0089 12.3588L21.9772 12.3505C21.558 12.2407 22.2574 12.2252 21.822 12.3048C21.3866 12.3845 20.9645 12.5578 20.58 12.8146C20.1956 13.0715 19.8565 13.4068 19.5822 13.8012C19.308 14.1957 19.1041 14.6414 18.9824 15.1126C18.4521 15.101 17.9206 15.2592 17.4517 15.5682C16.0768 16.4771 15.1102 18.6284 15.8462 20.0837C16.0044 20.3751 16.2156 20.6252 16.4675 20.8197C16.7193 21.0141 17.0069 21.149 17.3134 21.2165C18.2317 21.4454 19.2163 21.2772 20.0702 20.7456C20.5383 20.4352 20.9235 19.9875 21.1792 19.4563C22.0295 19.6805 21.8074 19.5195 22.5925 19.0082C22.9804 18.7521 23.3229 18.4163 23.5999 18.0204C23.8769 17.6245 26.268 18.4944 26.3909 18.0204C26.9211 18.032 25.2676 16.5559 25.7365 16.2469C27.0854 15.3503 28.078 13.1867 27.342 11.7315Z"
        fill="#ABD72E"
      />
      <Path
        d="M14.83 8.92003C15.5475 8.359 16.3431 8.04321 17.1065 8.31471C18.0265 8.64193 18.5493 9.64443 18.638 11.2934C18.6584 11.5907 18.6638 11.8885 18.6543 12.1854C19.1121 12.1587 20.7509 12.3671 21.1179 12.6379C21.9035 13.2177 22.0001 16 20.5001 16.5C20.2719 17.4941 19.8864 17.7616 19.3369 18.6209C18.5212 19.716 16.6894 20.7792 15.2178 20.4754L15.2119 20.4798C14.495 21.0224 13.6517 21.3735 12.7615 21.4999C11.5552 21.6286 7.46474 21.0828 7.23568 18.9349C7.13213 17.9639 6.67001 18.9321 8.11786 18.1379C5.50009 17.5 6.55014 14.362 8.00009 14.5C6.68154 13.4893 6.50015 12.1854 7.23574 11.2934C7.58727 10.4695 8.07946 10.0596 9.50012 9.99994C9.53887 8.429 10.2409 7.39583 11.5704 7.01754C12.5096 6.75031 13.5171 7.26354 14.546 8.55516C14.6439 8.67441 14.7386 8.79608 14.83 8.92003Z"
        fill="#71BC3D"
      />
      <Path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0798 10.269C13.0583 10.1047 12.9078 9.98894 12.7435 10.0104C12.5792 10.0318 12.4634 10.1824 12.4848 10.3466C12.5873 11.132 12.7279 11.8988 12.8959 12.6455C12.8609 12.6312 12.8225 12.6233 12.7824 12.6233H10.1669C10.0013 12.6233 9.86694 12.7576 9.86694 12.9233C9.86694 13.0889 10.0013 13.2233 10.1669 13.2233H12.7824C12.8719 13.2233 12.9523 13.184 13.0073 13.1218C13.5184 15.2286 14.2322 17.1679 14.892 18.9008C14.8863 18.9005 14.8805 18.9003 14.8747 18.9003H10.1669C10.0013 18.9003 9.86694 19.0346 9.86694 19.2003C9.86694 19.366 10.0013 19.5003 10.1669 19.5003H14.8747C14.9577 19.5003 15.0328 19.4666 15.0872 19.4121L15.0933 19.4283L15.0933 19.4283L15.0934 19.4286L15.0935 19.4286C15.2847 19.929 15.4689 20.4109 15.6393 20.8733C15.6966 21.0288 15.8691 21.1084 16.0246 21.0511C16.18 20.9938 16.2596 20.8213 16.2023 20.6658C16.0279 20.1927 15.8409 19.7032 15.6479 19.1978C15.2451 18.1432 14.8159 17.0195 14.4193 15.831C14.5033 15.8115 14.5784 15.756 14.62 15.6728L16.7123 11.4882C16.7864 11.34 16.7263 11.1598 16.5781 11.0857C16.43 11.0116 16.2498 11.0716 16.1757 11.2198L14.203 15.1651C13.7194 13.6325 13.3052 11.9976 13.0798 10.269Z"
        fill="#C2EB4D"
      />
      <Path
        d="M19.6667 25H12.3334C11.8272 25 11.4167 25.2686 11.4167 25.6V27.4C11.4167 27.7314 11.8272 28 12.3334 28H19.6667C20.173 28 20.5834 27.7314 20.5834 27.4V25.6C20.5834 25.2686 20.173 25 19.6667 25Z"
        fill="#BFBBBB"
      />
      <Path
        d="M25.6251 21.5C26.3584 21.1 26.8473 18.8333 27.0001 18L15.5417 18.5V21C18.5973 21.3333 24.8917 21.9 25.6251 21.5Z"
        fill="#E5E5E5"
      />
      <Path
        d="M18.75 20.4718C18.5069 20.4718 18.2737 20.3986 18.1018 20.2684C17.9299 20.1382 17.8333 19.9616 17.8333 19.7774C17.8333 19.5933 17.9299 19.4167 18.1018 19.2864C18.2737 19.1562 18.5069 19.0831 18.75 19.0831H26.835C26.9411 18.6245 26.9963 18.1599 27 17.6944C27 17.5102 26.9034 17.3336 26.7315 17.2034C26.5596 17.0732 26.3264 17 26.0833 17H5.91667C5.67355 17 5.44039 17.0732 5.26849 17.2034C5.09658 17.3336 5 17.5102 5 17.6944C5.00828 19.6552 5.92923 21.551 7.6008 23.0482C9.27237 24.5454 11.5875 25.5481 14.1388 25.8798C16.6901 26.2116 19.3141 25.8512 21.5492 24.862C23.7843 23.8728 25.4872 22.3182 26.3583 20.4718H18.75Z"
        fill="#E5E5E5"
      />
    </Svg>
  );
};

export default Vegetable;

const styles = StyleSheet.create({});
