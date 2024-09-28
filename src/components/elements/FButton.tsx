import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';

type FButtonProps = {
  buttonStyle:
    | 'svgButton'
    | 'loginButton'
    | 'menuButton'
    | 'iconButton'
    | 'iconButton2'
    | 'smallIcon'
    | 'iconText'
    | 'submit'
    | 'bigButton'
    | 'buyButton'
    | 'addButton'
    | 'addButton2'
    | 'noneStyle';
  buttonColor?: string;
  radius?: number;
  fBStyle?: StyleProp<ViewStyle>;
  fontFamily?:
    | 'Pretendard-Black'
    | 'Pretendard-Bold'
    | 'Pretendard-ExtraBold'
    | 'Pretendard-ExtraLight'
    | 'Pretendard-Light'
    | 'Pretendard-Medium'
    | 'Pretendard-Regular'
    | 'Pretendard-SemiBold'
    | 'Pretendard-Thin';
  borderWidth?: number;
  paddingVertical?: number;
  title?: string;
  titlePadding?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  titleColor?: string;
  titleWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  children?: React.ReactNode;
};

const FButton = ({
  buttonStyle,
  buttonColor = colors.white,
  radius = 12,
  borderWidth = 0,
  paddingVertical,
  title,
  fontSize,
  fontFamily,
  lineHeight,
  letterSpacing,
  fBStyle,
  marginTop,
  marginRight,
  marginBottom,
  titleColor,
  onPress,
  onLayout,
  children,
}: FButtonProps) => {
  const styleList = {
    noneStyle: styles.noneStyle,
    loginButton: [
      styles.login,
      {
        backgroundColor: buttonColor,
        paddingVertical: paddingVertical,
        borderWidth: borderWidth,
        marginBottom: marginBottom,
      },
    ],

    menuButton: styles.menu,
    svgButton: [
      styles.svgIconButton,
      {
        backgroundColor: buttonColor,
        borderRadius: radius,
      },
    ],
    iconButton: [
      styles.iconButton,
      {
        backgroundColor: buttonColor,
        borderRadius: radius,
        borderWidth: borderWidth,
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
      },
    ],
    smallIcon: styles.smallIcon,
    iconText: styles.iconTextButton,
    iconButton2: [
      styles.iconButton2,
      {
        backgroundColor: buttonColor,
        borderWidth: borderWidth,
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
      },
    ],
    bigButton: [
      styles.bigButton,
      {
        backgroundColor: buttonColor,
        marginBottom: marginBottom,
      },
    ],
    addButton: styles.addButton,
    addButton2: styles.addButton2,
    submit: [
      styles.submitButton,
      {
        backgroundColor: buttonColor,
      },
    ],
    buyButton: [styles.buyButton],
  };

  return (
    <TouchableOpacity
      style={[styleList[buttonStyle], fBStyle]}
      activeOpacity={1}
      onLayout={onLayout}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <Text
          style={{
            color: titleColor,
            fontSize: fontSize,
            fontFamily: fontFamily,
            lineHeight: lineHeight,
            letterSpacing: letterSpacing,
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FButton;

const styles = StyleSheet.create({
  login: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 14,
    justifyContent: 'center',
  },

  menu: {
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 6,
    borderRadius: 50,
  },

  svgIconButton: {
    padding: 12,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    borderRadius: 999,
  },

  iconButton: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 14,
    paddingVertical: FWidth * 8,
    alignItems: 'center',
  },

  iconButton2: {
    paddingVertical: FWidth * 8,
    paddingHorizontal: FWidth * 14,
    borderRadius: 999,
    borderColor: colors.border,
    alignSelf: 'flex-start',
  },

  smallIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  iconTextButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  submitButton: {
    height: FWidth * 64,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigButton: {
    paddingVertical: FWidth * 14,
    borderRadius: 14,
    // paddingVertical: FWidth * 16,
    alignItems: 'center',
  },

  buyButton: {
    paddingHorizontal: FWidth * 19.5,
    paddingVertical: FWidth * 8,
    borderColor: colors.border,
    borderRadius: 40,
    borderWidth: 1,
  },

  addButton: {
    paddingVertical: FWidth * 12,
    borderRadius: 40,
  },

  addButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: FWidth * 10,
    paddingHorizontal: FWidth * 16,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.border,
  },

  noneStyle: {},
});
