import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {fontFamilies, fontStyles, FWidth} from '../../../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

type SubTitleComponentProps = {
  title: string;
  onPress?: () => void;
};

const SubTitleComponent = ({title, onPress}: SubTitleComponentProps) => {
  return (
    <FButton buttonStyle="iconText" onPress={onPress}>
      <Text style={[fontStyles.B_14, {color: '#999999'}]}>{title}</Text>
    </FButton>
  );
};

export default SubTitleComponent;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fontFamilies.pretendardRegular,
    color: '#545559',
  },
  iconContainer: {
    width: FWidth * 18,
    height: FWidth * 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
});
