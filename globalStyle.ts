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

export const fontStyles = {
  B_32: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 32,
    lineHeight: FHeight * 40,
    letterSpacing: -0.4,
  },

  B_22: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 22,
    lineHeight: FHeight * 34,
    letterSpacing: -0.2,
  },

  B_24: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 24,
    lineHeight: FHeight * 30,
    letterSpacing: -0.4,
  },
  B_16: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 16,
    lineHeight: FHeight * 22,
    letterSpacing: -0.1,
  },
  M_16: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 16,
    lineHeight: FHeight * 22,
    letterSpacing: -0.2,
  },
  R_16: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: 16,
    lineHeight: FHeight * 22,
    letterSpacing: -0.2,
  },
  B_14: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 14,
    lineHeight: FHeight * 20,
    letterSpacing: -0.2,
  },
  M_14: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 14,
    lineHeight: FHeight * 20,
    letterSpacing: -0.2,
  },
  R_14: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: 14,
    lineHeight: FHeight * 20,
    letterSpacing: -0.2,
  },
  B_12: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 12,
    lineHeight: FHeight * 18,
    letterSpacing: -0.2,
  },
  M_12: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 12,
    lineHeight: FHeight * 18,
    letterSpacing: -0.2,
  },
  R_12: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: 12,
    lineHeight: FHeight * 18,
    letterSpacing: -0.2,
  },

  B_10: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 10,
    lineHeight: FHeight * 20,
    letterSpacing: 0,
  },
  M_10: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 10,
    lineHeight: FHeight * 20,
    letterSpacing: 0,
  },
  R_10: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: 10,
    lineHeight: FHeight * 20,
    letterSpacing: 0,
  },
};
