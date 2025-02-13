import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import Close2 from '../../utils/Svg/Close2';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

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
    marginTop: FWidth * 14,
  },
});
