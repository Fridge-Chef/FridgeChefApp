import {ColorValue, DimensionValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilies, FWidth} from '../../../globalStyle';

type FTextProps = {
  fStyle:
    | 'B_26'
    | 'B_24'
    | 'B_22'
    | 'B_20'
    | 'M_20'
    | 'B_18'
    | 'M_18'
    | 'R_18'
    | 'B_16'
    | 'M_16'
    | 'R_16'
    | 'B_14'
    | 'M_14'
    | 'R_14'
    | 'B_12'
    | 'M_12'
    | 'R_12'
    | 'B_10'
    | 'M_10'
    | 'R_10';
  text?: string | number;
  color?: ColorValue;
  lineH?: number;
  nLine?: number;
  mTop?: DimensionValue;
  mLeft?: DimensionValue;
  mRight?: DimensionValue;
  mBottom?: DimensionValue;
  mHor?: DimensionValue;
  mVer?: DimensionValue;
};

const FText = ({
  fStyle,
  text,
  color,
  lineH,
  nLine,
  mTop,
  mLeft,
  mRight,
  mBottom,
  mHor,
  mVer,
}: FTextProps) => {
  const boxHeightList = {
    B_26: styles.lineHeight36,
    B_24: styles.lineHeight34,
    B_22: styles.lineHeight32,
    B_20: styles.lineHeight28,
    M_20: styles.lineHeight28,
    B_18: styles.lineHeight28,
    M_18: styles.lineHeight28,
    R_18: styles.lineHeight28,
    B_16: styles.lineHeight24,
    M_16: styles.lineHeight24,
    R_16: styles.lineHeight24,
    B_14: styles.lineHeight20,
    M_14: styles.lineHeight20,
    R_14: styles.lineHeight20,
    B_12: styles.lineHeight18,
    M_12: styles.lineHeight18,
    R_12: styles.lineHeight18,
    B_10: styles.lineHeight18,
    M_10: styles.lineHeight18,
    R_10: styles.lineHeight18,
  };

  const fontSizeList = {
    B_26: styles.fontSizeB26,
    B_24: styles.fontSizeB24,
    B_22: styles.fontSizeB22,
    B_20: styles.fontSizeB20,
    M_20: styles.fontSizeM20,
    B_18: styles.fontSizeB18,
    M_18: styles.fontSizeM18,
    R_18: styles.fontSizeR18,
    B_16: styles.fontSizeB16,
    M_16: styles.fontSizeM16,
    R_16: styles.fontSizeR16,
    B_14: styles.fontSizeB14,
    M_14: styles.fontSizeM14,
    R_14: styles.fontSizeR14,
    B_12: styles.fontSizeB12,
    M_12: styles.fontSizeM12,
    R_12: styles.fontSizeR12,
    B_10: styles.fontSizeB10,
    M_10: styles.fontSizeM10,
    R_10: styles.fontSizeR10,
  };

  return (
    <>
      {!nLine ? (
        <View
          style={[
            boxHeightList[fStyle],
            {
              marginTop: mTop,
              marginLeft: mLeft,
              marginRight: mRight,
              marginBottom: mBottom,
              marginHorizontal: mHor,
              marginVertical: mVer,
            },
          ]}>
          <Text style={[fontSizeList[fStyle], {color, lineHeight: lineH}]}>
            {text}
          </Text>
        </View>
      ) : (
        <Text
          numberOfLines={nLine}
          style={[
            fontSizeList[fStyle],
            {color, lineHeight: lineH, flexShrink: 1},
          ]}>
          {text}
        </Text>
      )}
    </>
  );
};

export default FText;

const styles = StyleSheet.create({
  lineHeight36: {
    height: FWidth * 36,
    justifyContent: 'center',
  },

  lineHeight34: {
    height: FWidth * 34,
    justifyContent: 'center',
  },

  lineHeight32: {
    height: FWidth * 32,
    justifyContent: 'center',
  },

  lineHeight28: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  lineHeight24: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  lineHeight20: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  lineHeight18: {
    height: FWidth * 18,
    justifyContent: 'center',
  },

  fontSizeB26: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 26,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeB24: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 24,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeB22: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 22,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeB20: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 20,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeM20: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 20,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeB18: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 18,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeM18: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 18,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeR18: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 18,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.2,
  },

  fontSizeB16: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 16,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeM16: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 16,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeR16: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 16,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeB14: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 14,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeM14: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 14,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeR14: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 14,
    includeFontPadding: false,
    letterSpacing: FWidth * -0.1,
  },

  fontSizeB12: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 12,
    includeFontPadding: false,
    letterSpacing: 0,
  },

  fontSizeM12: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 12,
    includeFontPadding: false,
    letterSpacing: 0,
  },

  fontSizeR12: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 12,
    includeFontPadding: false,
    letterSpacing: 0,
  },

  fontSizeB10: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 10,
    includeFontPadding: false,
    letterSpacing: 0,
  },

  fontSizeM10: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: FWidth * 10,
    includeFontPadding: false,
    letterSpacing: 0,
  },

  fontSizeR10: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: FWidth * 10,
    includeFontPadding: false,
    letterSpacing: 0,
  },
});
