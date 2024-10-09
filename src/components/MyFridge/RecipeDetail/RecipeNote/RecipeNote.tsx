import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import NoteContent from './NoteContent';

type RecipeNoteProps = {
  content: string;
};

const RecipeNote = ({content}: RecipeNoteProps) => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피 노트" />
      <NoteContent content={content} />
    </View>
  );
};

export default RecipeNote;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
