import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import Close2 from '../../utils/Svg/Close2';

type BasicCloseItemProps = {
  item: string;
  onPress?: () => void;
};

const BasicCloseItem = ({item, onPress}: BasicCloseItemProps) => {
  return (
    <View style={styles.container}>
      <FText
        mRight={FWidth * 4}
        fStyle="M_16"
        color={colors.black}
        text={item}
      />
      <FButton buttonStyle="noneStyle" onPress={onPress}>
        <Close2 />
      </FButton>
    </View>
  );
};

export default BasicCloseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 100,
    backgroundColor: colors.background,
    marginRight: FWidth * 6,
    marginTop: FWidth * 14,
  },
});
