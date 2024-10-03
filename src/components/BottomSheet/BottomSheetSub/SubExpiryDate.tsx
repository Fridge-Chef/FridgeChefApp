import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import FButton from '../../elements/FButton';
import {useSubBottomSheetDate} from '../../../store/store';

const SubExpiryDate = () => {
  const [date, setDate] = useState(new Date());
  const {setSelectedDate} = useSubBottomSheetDate();

  const handleSubmit = () => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <View style={styles.container}>
      <DatePicker mode="date" date={date} onDateChange={setDate} />
      <FButton
        buttonStyle="addButton"
        fBStyle={styles.buttonStyle}
        onPress={handleSubmit}>
        <FText fStyle="B_16" color={colors.white} text="선택완료" />
      </FButton>
    </View>
  );
};

export default SubExpiryDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 56,
    alignItems: 'center',
    paddingHorizontal: FWidth * 22,
  },

  buttonStyle: {
    marginTop: FWidth * 64,
    marginBottom: FWidth * 32,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.text,
  },
});
