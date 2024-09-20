import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {FHeight, FWidth} from '../../../../globalStyle';
import {useBottomSheetRef, useIngredientTitle} from '../../../store/store';
import FInput from '../../elements/FInput';
import BottomButton from '../BottomButton';

const ExpiryDate = () => {
  const [inputTitle, setInputTitle] = useState('');
  const {ingredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();

  const handleSubmit = () => {
    console.log(inputTitle);
    setInputTitle('');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle title={`${ingredientTitle} 유통기한 등록하기`} />
        <View style={styles.inputContainer}>
          <FInput
            inputStyle="default"
            value={inputTitle}
            placeholder="유통기한을 입력해주세요"
            onChangeText={text => {
              setInputTitle(text);
            }}
            onSubmitEditing={() => {
              handleSubmit();
            }}
            fontSize={16}
          />
        </View>
      </View>
      <BottomButton
        title="확인"
        buttonColor={inputTitle ? 'black' : '#E6E6E6'}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default ExpiryDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 33,
  },

  inputContainer: {
    marginTop: FHeight * 24,
  },
});
