import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FInput from '../../../elements/FInput';
import {colors, fontFamilies, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type ContentTitleInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const ContentTitleInput = ({value, onChangeText}: ContentTitleInputProps) => {
  const [maxLength] = useState(150);
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        onChangeText={onChangeText}
        textAlignVertical="top"
        minHeight={FWidth * 172}
        inputStyle="recipe"
        placeholder={'간단한 레시피 소개를 작성해주세요 최대 (150자)'}
        multiline={true}
        fontFamily={fontFamilies.pretendardRegular}
        maxLength={maxLength}
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

export default ContentTitleInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  textContainer: {
    position: 'absolute',
    right: FWidth * 14,
    bottom: FWidth * 14,
  },
});
