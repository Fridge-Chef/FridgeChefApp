import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {useAddModalInputText, useBottomSheetRef} from '../../store/store';
import {colors} from '../../../globalStyle';
import Close from '../../utils/Svg/Close';
import FText from '../elements/FText';

type TopTitleProps = {
  title: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
};

const TopTitle = ({title, setIsOpen, setCategory}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const handleClose = () => {
    setAddTitle('');
    setIsOpen?.(false);
    setCategory?.('미분류');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.titleContainer}>
      <FText fStyle="B_18" color={colors.text} text={title} />
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
});
