import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {
  useSubBottomSheetRef,
  useSubBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {useCategoriesText} from '../../../store/store';
import Calendar2 from '../../../utils/Svg/Calendar2';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import SubTitleBS2 from '../SubTitleBS2';

type ExpiryDateProps = {
  ingredientData: string | undefined;
};

const ExpiryDate = ({ingredientData}: ExpiryDateProps) => {
  const {subBottomSheetRef} = useSubBottomSheetRef();
  const {setSubTitle} = useSubBottomSheetTitle();
  const {expiryDate, setExpiryDate} = useCategoriesText();
  const handleAddExpiryDate = () => {
    setSubTitle('유통기한');
    subBottomSheetRef.current?.present();
  };

  useEffect(() => {
    if (ingredientData) {
      setExpiryDate(ingredientData);
    }
  }, [ingredientData]);

  return (
    <View style={styles.container}>
      <SubTitleBS2 title="유통기한 등록" />
      <FButton
        marginTop={FWidth * 14}
        buttonStyle="selected"
        onPress={handleAddExpiryDate}>
        <FText
          fStyle={expiryDate !== '날짜를 선택해 주세요' ? 'B_16' : 'R_16'}
          color={
            expiryDate !== '날짜를 선택해 주세요' ? colors.text : colors.b400
          }
          text={expiryDate}
        />
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
