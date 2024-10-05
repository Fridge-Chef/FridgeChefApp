import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type NoteContentProps = {
  content: string;
};

const NoteContent = ({content}: NoteContentProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        lineH={FWidth * 24}
        fStyle="R_16"
        color={colors.text}
        text={content}
      />
    </View>
  );
};

export default NoteContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },
});
