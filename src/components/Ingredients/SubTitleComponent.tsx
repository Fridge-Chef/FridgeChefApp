import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {fontStyles} from '../../../globalStyle';

type SubTitleComponentProps = {
  title: string;
  color?: string;
  onPress?: () => void;
};

const SubTitleComponent = ({title, color, onPress}: SubTitleComponentProps) => {
  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <Text style={[fontStyles.B_14, {color: color}]}>{title}</Text>
    </FButton>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({});
