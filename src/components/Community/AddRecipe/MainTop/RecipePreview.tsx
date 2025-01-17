import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../../globalStyle';
import ContentTitleInput from './ContentTitleInput';

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
