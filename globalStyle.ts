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
  background: '#F6F8FB',
  background2: '#F6F7F9',
  background3: '#FAFAFA',
  border: '#DDDDE3',
  border2: '#BABCC1',
  field: '#D4D4D4',
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
    (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2),
  );

export const FWidth = // 가로 변환 작업
  Number(
    (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2),
  );

export const fontStyles = {
  B_16: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 16,
    // lineHeight: FWidth * 24,
    letterSpacing: FWidth * -0.1,
  },
};
