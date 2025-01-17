import React from 'react';
import {
  ColorValue,
  DimensionValue,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';

type FButtonProps = {
  buttonStyle:
    | 'indicator'
    | 'selected'
    | 'svgButton'
    | 'loginButton'
    | 'modal'
    | 'menuButton'
    | 'menuButton2'
    | 'iconButton'
    | 'iconButton2'
    | 'smallIcon'
    | 'iconText'
    | 'submit'
    | 'category'
    | 'bigButton'
    | 'buyButton'
    | 'addButton'
    | 'addButton2'
    | 'noneStyle';
  buttonColor?: ColorValue;
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
  borderColor?: ColorValue;
  paddingVertical?: number;
  title?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  titlePadding?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  titleColor?: ColorValue;
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
  hitSlop?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  disabled?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
  children?: React.ReactNode;
};

const FButton = ({
  buttonStyle,
  buttonColor = colors.white,
  radius = 12,
  borderWidth = 0,
  borderColor,
  paddingVertical,
  title,
  width,
  height,
  fontSize,
  fontFamily,
  lineHeight,
  letterSpacing,
  fBStyle,
  marginTop,
  marginRight,
  marginBottom,
  titleColor,
  disabled,
  onPress,
  hitSlop,
  onLayout,
  children,
}: FButtonProps) => {
  const styleList = {
    noneStyle: styles.noneStyle,
    indicator: styles.indicator,
    category: [
      styles.category,
      {
        width: width,
        height: height,
        backgroundColor: buttonColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
      },
    ],
    selected: [styles.selected, {marginTop: marginTop}],
    loginButton: [
      styles.login,
      {
        backgroundColor: buttonColor,
        paddingVertical: paddingVertical,
        borderWidth: borderWidth,
        marginBottom: marginBottom,
      },
    ],
    modal: [
      styles.modal,
      {backgroundColor: buttonColor, marginRight: marginRight},
    ],
    menuButton: styles.menu,
    menuButton2: styles.menuButton2,
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
      onPress={onPress}
      hitSlop={hitSlop}
      disabled={disabled}>
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
  indicator: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    paddingVertical: FWidth * 16,
    borderBottomWidth: 1,
    borderColor: colors.b200,
  },

  selected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: FWidth * 14,
    borderWidth: 1,
    borderColor: colors.field,
    borderRadius: 10,
    paddingHorizontal: FWidth * 12,
  },

  category: {
    marginBottom: FWidth * 12,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 14,
    justifyContent: 'center',
  },

  menu: {
    paddingHorizontal: FWidth * 6,
    paddingVertical: FWidth * 4,
    borderRadius: 50,
  },

  menuButton2: {
    paddingHorizontal: FWidth * 16,
    paddingVertical: FWidth * 9,
    borderRadius: 100,
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
    paddingVertical: FWidth * 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigButton: {
    // paddingVertical: FWidth * 14,
    // borderRadius: 14,
    paddingVertical: FWidth * 16,
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

  modal: {
    flex: 1,
    width: '100%',
    paddingVertical: FWidth * 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  noneStyle: {},
});
