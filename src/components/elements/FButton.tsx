import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../globalStyle';

type FButtonProps = {
  buttonStyle:
    | 'svgButton'
    | 'iconButton'
    | 'iconButton2'
    | 'iconText'
    | 'submit'
    | 'noneStyle';
  buttonColor?: string;
  radius?: number;
  style?: any;
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
  title?: string;
  titlePadding?: number;
  marginRight?: number;
  marginBottom?: number;
  fontSize?: number;
  titleColor?: 'black' | 'white' | 'gray' | 'red' | 'blue' | 'green';
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
  buttonColor = 'white',
  radius = 12,
  borderWidth = 0,
  title,
  style,
  marginRight,
  marginBottom,
  titleColor,
  onPress,
  onLayout,
  children,
}: FButtonProps) => {
  const buttonColorList: Record<string, string> = {
    black: 'black',
    white: 'white',
    gray: '#F4F6FA',
    red: 'red',
    blue: 'blue',
    green: 'green',
  };

  const styleList = {
    noneStyle: styles.noneStyle,
    svgButton: [
      styles.svgIconButton,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
        borderRadius: radius,
      },
    ],
    iconButton: [
      styles.iconButton,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
        borderRadius: radius,
        borderWidth: borderWidth,
        marginBottom: marginBottom,
      },
    ],
    iconText: styles.iconTextButton,
    iconButton2: [
      styles.iconButton2,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
        borderWidth: borderWidth,
        marginRight: marginRight,
        marginBottom: marginBottom,
      },
    ],
    submit: [
      styles.submitButton,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
      },
    ],
  };

  return (
    <TouchableOpacity
      style={styleList[buttonStyle]}
      activeOpacity={1}
      onLayout={onLayout}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <Text
          style={[
            style,
            {
              color: titleColor,
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FButton;

const styles = StyleSheet.create({
  svgIconButton: {
    padding: 12,
    borderRadius: 999,
  },

  iconButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginRight: FWidth * 6,
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    alignItems: 'center',
  },

  iconButton2: {
    paddingVertical: FHeight * 8,
    paddingHorizontal: FWidth * 14,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },

  iconTextButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  submitButton: {
    height: FHeight * 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noneStyle: {},
});
