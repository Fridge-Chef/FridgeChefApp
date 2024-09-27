import {StyleSheet, View} from 'react-native';
import React from 'react';
import Close2 from '../../utils/Svg/Close2';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type CloseItemProps = {
  name: string;
  onPress?: () => void;
};

const CloseItem = ({name, onPress}: CloseItemProps) => {
  return (
    <View style={styles.container}>
      <FText
        mRight={FWidth * 4}
        fStyle="M_16"
        color={colors.black}
        text={name}
      />
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
});
