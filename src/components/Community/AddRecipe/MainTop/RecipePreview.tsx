import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContentTitleInput from './ContentTitleInput';
import {FWidth} from '../../../../../globalStyle';

type RecipePreviewProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const RecipePreview = ({value, onChangeText}: RecipePreviewProps) => {
  return (
    <View style={styles.inputContainer}>
      <ContentTitleInput value={value} onChangeText={onChangeText} />
    </View>
  );
};

export default RecipePreview;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FWidth * 8,
  },
});
