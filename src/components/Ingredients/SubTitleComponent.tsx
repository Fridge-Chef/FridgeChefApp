import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {colors, fontStyles} from '../../../globalStyle';

type SubTitleComponentProps = {
  title: string;
  onPress?: () => void;
};

const SubTitleComponent = ({title, onPress}: SubTitleComponentProps) => {
  return (
    <FButton buttonStyle="iconText" onPress={onPress}>
      <Text style={[fontStyles.B_14, {color: colors.b400}]}>{title}</Text>
    </FButton>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({});
