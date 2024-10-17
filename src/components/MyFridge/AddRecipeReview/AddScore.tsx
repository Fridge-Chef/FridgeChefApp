import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import ScoreList from './ScoreList';

type AddScoreProps = {
  title: string;
};

const AddScore = ({title}: AddScoreProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        lineH={FWidth * 32}
        fStyle="B_16"
        color={colors.text}
        text={title}
      />
      <ScoreList />
    </View>
  );
};

export default AddScore;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.b200,
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 24,
    borderRadius: 14,
  },
});
