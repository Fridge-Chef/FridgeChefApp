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
      <FText mTop={2} fStyle="M_14" color={nameColor} text={name} />
    </FButton>
  );
};

export default Category;

const styles = StyleSheet.create({});
