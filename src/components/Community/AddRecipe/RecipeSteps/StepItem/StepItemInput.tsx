import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FInput from '../../../../elements/FInput';
import {fontFamilies, FWidth} from '../../../../../../globalStyle';

type StepItemInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  index: number;
};

const StepItemInput = ({value, onChangeText, index}: StepItemInputProps) => {
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        onChangeText={onChangeText}
        minHeight={FWidth * 148}
        fontFamily={fontFamilies.pretendardRegular}
        maxLength={150}
        multiline={true}
        textAlignVertical="top"
        inputStyle="noBorder"
        placeholder={`${index}단계 조리과정을 작성해주세요 (최대 150자)`}
      />
    </View>
  );
};

export default StepItemInput;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
  },
});
