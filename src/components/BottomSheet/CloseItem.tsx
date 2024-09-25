import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Close2 from '../../utils/Svg/Close2';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';

type CloseItemProps = {
  name: string;
  onPress?: () => void;
};

const CloseItem = ({name, onPress}: CloseItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.M_16, styles.textColor]}>{name}</Text>
      <FButton buttonStyle="noneStyle" onPress={onPress}>
        <Close2 />
      </FButton>
    </View>
  );
};

export default CloseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 9,
    borderRadius: 50,
    backgroundColor: colors.background,
    marginRight: FWidth * 8,
    marginTop: FWidth * 10,
  },

  textColor: {
    color: colors.black,
    marginRight: FWidth * 4,
  },
});
