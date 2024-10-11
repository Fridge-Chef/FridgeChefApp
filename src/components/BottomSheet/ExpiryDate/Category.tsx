import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import Bowl from '../../../utils/Svg/Bowl';
import FText from '../../elements/FText';
import FButton from '../../elements/FButton';

type CategoryProps = {
  width: number;
  height: number;
  borderWidth: number;
  borderColor: string;
  buttonColor: string;
  fontSize:
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
  nameColor: string;
  name: string;
  children: React.ReactNode;
  onPress: () => void;
};

const Category = ({
  width,
  height,
  borderWidth,
  borderColor,
  buttonColor,
  fontSize,
  nameColor,
  name,
  children,
  onPress,
}: CategoryProps) => {
  return (
    <FButton
      buttonStyle="category"
      width={width}
      height={height}
      borderWidth={borderWidth}
      borderColor={borderColor}
      buttonColor={buttonColor}
      onPress={onPress}>
      {children}
      <FText mTop={2} fStyle={fontSize} color={nameColor} text={name} />
    </FButton>
  );
};

export default Category;

const styles = StyleSheet.create({});
