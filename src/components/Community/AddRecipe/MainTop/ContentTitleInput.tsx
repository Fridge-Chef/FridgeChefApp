import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FInput from '../../../elements/FInput';
import {fontFamilies, FWidth} from '../../../../../globalStyle';

type ContentTitleInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const ContentTitleInput = ({value, onChangeText}: ContentTitleInputProps) => {
  return (
    <FInput
      value={value}
      onChangeText={onChangeText}
      textAlignVertical="top"
      minHeight={FWidth * 148}
      inputStyle="recipe"
      placeholder={'레시피에 대한 소개를 간단히 적어주세요.\n최대 (150자)'}
      multiline={true}
      fontFamily={fontFamilies.pretendardRegular}
      maxLength={150}
    />
  );
};

export default ContentTitleInput;

const styles = StyleSheet.create({});
