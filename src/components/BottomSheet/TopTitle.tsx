import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {useAddModalInputText, useBottomSheetRef} from '../../store/store';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import SvgImage from '../elements/SvgImage';
import Close from '../../utils/Svg/Close';

type TopTitleProps = {
  title: string;
};

const TopTitle = ({title}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const handleClose = () => {
    setAddTitle('');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.titleContainer}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.B_18, styles.textColor]}>{title}</Text>
      </View>
      <FButton buttonStyle="noneStyle" onPress={handleClose}>
        <Close />
      </FButton>
    </View>
  );
};

export default TopTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
