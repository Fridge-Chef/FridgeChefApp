import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {fontStyles, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type SubTitleComponentProps = {
  title: string;
  color?: string;
  onPress?: () => void;
};

const SubTitleComponent = ({title, color, onPress}: SubTitleComponentProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <FText fStyle="B_14" color={color} text={title} />
    </FButton>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({});
