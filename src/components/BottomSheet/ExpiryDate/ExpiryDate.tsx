import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import SubTitleBS from '../SubTitleBS';
import FButton from '../../elements/FButton';
import Calendar2 from '../../../utils/Svg/Calendar2';
import {
  useSubBottomSheetRef,
  useSubBottomSheetTitle,
} from '../../../store/store';

const ExpiryDate = () => {
  const {subBottomSheetRef} = useSubBottomSheetRef();
  const {setSubTitle} = useSubBottomSheetTitle();
  const handleAddExpiryDate = () => {
    setSubTitle('유통기한');
    subBottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <SubTitleBS title="유통기한 등록" />
      <FButton
        marginTop={FWidth * 14}
        buttonStyle="selected"
        onPress={handleAddExpiryDate}>
        <FText fStyle="R_16" color={colors.b400} text={'날짜를 선택해주세요'} />
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
