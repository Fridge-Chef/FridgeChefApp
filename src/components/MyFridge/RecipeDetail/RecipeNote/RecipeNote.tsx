import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';
import NoteContent from './NoteContent';

type RecipeNoteProps = {
  content: string;
};

const RecipeNote = ({content}: RecipeNoteProps) => {
  return (
    <View style={styles.container}>
      <SubTitle2 title="레시피 노트" />
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
