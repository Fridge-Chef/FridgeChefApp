import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../globalStyle';

type FButtonProps = {
  buttonStyle:
    | 'iconButton'
    | 'iconButton2'
    | 'iconText'
    | 'submit'
    | 'noneStyle';
  buttonColor?: string;
  radius?: number;
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
  children?: React.ReactNode;
};

const FButton = ({
  buttonStyle,
  buttonColor = 'white',
  radius = 12,
  borderWidth = 0,
  title,
  titlePadding,
  marginRight,
  marginBottom,
  fontFamily,
  fontSize,
  titleColor,
  titleWeight,
  onPress,
  children,
}: FButtonProps) => {
  const buttonColorList: Record<string, string> = {
    black: 'black',
    white: 'white',
    gray: '#f7f7f7',
    red: 'red',
    blue: 'blue',
    green: 'green',
  };

  const styleList = {
    noneStyle: styles.noneStyle,
    iconButton: [
      styles.iconButton,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
        borderRadius: radius,
        borderWidth: borderWidth,
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
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styleList[buttonStyle]}>
        {children ? (
          children
        ) : (
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: fontSize,
              color: titleColor,
              fontWeight: titleWeight,
              padding: titlePadding,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FButton;

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    alignItems: 'center',
    borderColor: '#545559',
  },

  iconButton2: {
    paddingVertical: FHeight * 8,
    paddingHorizontal: FWidth * 16,
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
