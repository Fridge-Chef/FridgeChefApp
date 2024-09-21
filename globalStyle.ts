import {Dimensions} from 'react-native';

export const colors = {
  primary: '#EC8B57',
  secondary: '#F2C94C',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#9B9B9B',
  lightGray: '#F2F2F2',
  darkGray: '#4F4F4F',
  error: '#FF0000',
  success: '#00FF00',
  warning: '#FFA500',
  info: '#0000FF',
};

export const fontFamilies = {
  pretendardBlack: 'Pretendard-Black',
  pretendardBold: 'Pretendard-Bold',
  pretendardExtraBold: 'Pretendard-ExtraBold',
  pretendardExtraLight: 'Pretendard-ExtraLight',
  pretendardLight: 'Pretendard-Light',
  pretendardMedium: 'Pretendard-Medium',
  pretendardRegular: 'Pretendard-Regular',
  pretendardSemiBold: 'Pretendard-SemiBold',
  pretendardThin: 'Pretendard-Thin',
} as const;

export const basicDimensions = {
  height: 852,
  width: 393,
};

export const FHeight = // 높이 변환 작업
  Number(
    Dimensions.get('screen').height * (1 / basicDimensions.height),
    // (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(1),
  );

export const FWidth = // 가로 변환 작업
  Number(
    Dimensions.get('screen').width * (1 / basicDimensions.width),
    // (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(1),
  );
