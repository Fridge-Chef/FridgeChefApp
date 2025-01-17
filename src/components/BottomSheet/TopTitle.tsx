import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import {useBottomSheetRef} from '../../store/bottomSheetStore';
import {useAddModalInputText} from '../../store/store';
import BottomClose from '../../utils/Svg/BottomClose';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type TopTitleProps = {
  title: string;
  onPress: () => void;
};

const TopTitle = ({title, onPress}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const handleClose = () => {
    setAddTitle('');
    onPress();
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
