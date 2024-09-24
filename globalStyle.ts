import {Dimensions} from 'react-native';

export const colors = {
  success: '#31B56F',
  error: '#E64E20',
  warning: '#E64E20',
  info: '#8189A6',
  primary: {
    1: '#FF6D54',
    2: '#FC846F',
    3: '#FEA892',
    4: '#FFEBE6',
  },
  secondary: {
    1: '#6572FF',
    2: '#DBFEEB',
  },
  black: '#000000',
  b900: '#222222',
  b800: '#333333',
  b700: '#555555',
  b600: '#666666',
  b500: '#777777',
  b400: '#999999',
  b300: '#AAAAAA',
  b200: '#DDDDDD',
  b100: '#F4F4F4',
  white: '#FFFFFF',
  text: '#2C2C2E',
  subText: '#545559',
  btnBG: '#49494E',
  background: '#F4F6FA',
  background2: '#F6F7F9',
  background3: '#FAFAFA',
  border: '#DDDDE3',
  border2: '#BABCC1',
  field: '#AFB1B6',
  disabled: '#BCBCC4',
  disabled2: '#CCCCCC',
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
    // Dimensions.get('screen').height * (1 / basicDimensions.height),
    (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2),
  );

export const FWidth = // 가로 변환 작업
  Number(
    // Dimensions.get('screen').width * (1 / basicDimensions.width),
    (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2),
  );

export const fontStyles = {
  B_26: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 26,
    lineHeight: FHeight * 36,
    letterSpacing: FWidth * -0.2,
  },

  B_24: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 24,
    lineHeight: FHeight * 34,
    letterSpacing: FWidth * -0.2,
  },

  B_22: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 22,
    lineHeight: FHeight * 32,
    letterSpacing: FWidth * -0.2,
  },

  B_20: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 20,
    lineHeight: FHeight * 28,
    letterSpacing: FWidth * -0.2,
  },

  M_20: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 20,
    lineHeight: FHeight * 28,
    letterSpacing: FWidth * -0.2,
  },

  B_18: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 18,
    lineHeight: FHeight * 28,
    letterSpacing: FWidth * -0.2,
  },

  M_18: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 18,
    lineHeight: FHeight * 28,
    letterSpacing: FWidth * -0.2,
  },

  B_16: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 16,
    lineHeight: FHeight * 22,
    letterSpacing: FWidth * -0.1,
  },
  M_16: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 16,
    lineHeight: FHeight * 22,
    letterSpacing: FWidth * -0.1,
  },
  R_16: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 16,
    lineHeight: FHeight * 22,
    letterSpacing: FWidth * -0.1,
  },
  B_14: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 14,
    lineHeight: FHeight * 20,
    letterSpacing: FWidth * -0.1,
  },
  M_14: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 14,
    lineHeight: FHeight * 20,
    letterSpacing: FWidth * -0.1,
  },
  R_14: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 14,
    lineHeight: FHeight * 20,
    letterSpacing: FWidth * -0.1,
  },
  B_12: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 12,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },

  M_12: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 12,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },
  R_12: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 12,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },

  B_10: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 10,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },
  M_10: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 10,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },
  R_10: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 10,
    lineHeight: FHeight * 18,
    letterSpacing: 0,
  },
};
