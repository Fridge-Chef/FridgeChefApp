import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fontFamilies, FWidth} from '../../../../../../globalStyle';
import FInput from '../../../../elements/FInput';
import FText from '../../../../elements/FText';

type StepItemInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  index: number;
};

const StepItemInput = ({value, onChangeText, index}: StepItemInputProps) => {
  const [maxLength] = useState(150);
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        onChangeText={onChangeText}
        minHeight={FWidth * 148}
        fontFamily={fontFamilies.pretendardRegular}
        maxLength={maxLength}
        multiline={true}
        textAlignVertical="top"
        inputStyle="noBorder"
        placeholder={`${index}단계 조리과정을 작성해주세요 (최대 150자)`}
      />
      <View style={styles.textContainer}>
        <FText
          fStyle="R_12"
          color={colors.b300}
          text={`${value.length}/${maxLength}`}
        />
      </View>
    </View>
  );
};

export default StepItemInput;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    position: 'relative',
  },

  textContainer: {
    position: 'absolute',
    right: 0,
    bottom: FWidth * 14,
  },
});
