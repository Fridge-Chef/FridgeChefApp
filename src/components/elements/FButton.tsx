import {StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import {FHeight, FWidth} from '../../../globalStyle';

type FButtonProps = {
  buttonStyle: 'iconButton' | 'iconText';
  buttonColor?: string;
  radius?: number;
  borderWidth?: number;
  title?: string;
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
  children?: React.ReactNode;
};

const FButton = ({
  buttonStyle,
  buttonColor = 'white',
  radius = 12,
  borderWidth = 0,
  title,
  fontSize,
  titleColor,
  titleWeight,
  children,
}: FButtonProps) => {
  const buttonColorList: Record<string, string> = {
    black: 'black',
    white: 'white',
    gray: 'rgba(0, 0, 0, 0.03)',
    red: 'red',
    blue: 'blue',
    green: 'green',
  };

  const styleList = {
    iconButton: [
      styles.iconButton,
      {
        backgroundColor: buttonColorList[buttonColor] || buttonColor,
        borderRadius: radius,
        borderWidth: borderWidth,
      },
    ],
    iconText: styles.iconTextButton,
  };

  return (
    <View style={styleList[buttonStyle]}>
      {children ? (
        children
      ) : (
        <Text
          style={{
            fontSize: fontSize,
            color: titleColor,
            fontWeight: titleWeight,
          }}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default FButton;

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    alignItems: 'center',
  },
  iconTextButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
