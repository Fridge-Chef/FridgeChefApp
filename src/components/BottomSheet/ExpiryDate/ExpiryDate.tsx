import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import SubTitleBS from '../SubTitleBS';
import FButton from '../../elements/FButton';
import Calendar2 from '../../../utils/Svg/Calendar2';
import {
  useSubBottomSheetDate,
  useSubBottomSheetRef,
  useSubBottomSheetTitle,
} from '../../../store/store';
import SubTitleBS2 from '../SubTitleBS2';

const ExpiryDate = () => {
  const {subBottomSheetRef} = useSubBottomSheetRef();
  const {setSubTitle} = useSubBottomSheetTitle();
  const {selectedDate} = useSubBottomSheetDate();
  const handleAddExpiryDate = () => {
    setSubTitle('유통기한');

    subBottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <SubTitleBS2 title="유통기한 등록" />
      <FButton
        marginTop={FWidth * 14}
        buttonStyle="selected"
        onPress={handleAddExpiryDate}>
        <FText fStyle="R_16" color={colors.b400} text={selectedDate} />
        <Calendar2 />
      </FButton>
    </View>
  );
};

export default ExpiryDate;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 40,
  },
});
