import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {useAddModalInputText, useBottomSheetRef} from '../../store/store';
import {colors} from '../../../globalStyle';
import FText from '../elements/FText';
import BottomClose from '../../utils/Svg/BottomClose';

type TopTitleProps = {
  title: string;
  setCategory?: (value: string) => void;
  setItemNumber?: (value: number) => void;
};

const TopTitle = ({title, setCategory, setItemNumber}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const handleClose = () => {
    setAddTitle('');
    setCategory?.('');
    setItemNumber?.(0);
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.titleContainer}>
      <FText fStyle="B_18" color={colors.black} text={title} />
      <FButton buttonStyle="noneStyle" onPress={handleClose}>
        <BottomClose />
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
});
