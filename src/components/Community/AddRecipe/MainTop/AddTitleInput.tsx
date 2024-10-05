import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FInput from '../../../elements/FInput';

type AddTitleInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const AddTitleInput = ({value, onChangeText}: AddTitleInputProps) => {
  return (
    <FInput
      value={value}
      onChangeText={onChangeText}
      inputStyle="recipe"
      placeholder="제목을 적어주세요"
    />
  );
};

export default AddTitleInput;

const styles = StyleSheet.create({});