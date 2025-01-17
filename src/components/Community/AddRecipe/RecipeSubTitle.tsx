import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type RecipeSubTitleProps = {
  title: string;
  required?: boolean;
};

const RecipeSubTitle = ({title, required = false}: RecipeSubTitleProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_16" color={colors.text} text={title} />
      {required && <FText fStyle="B_16" color={colors.primary[1]} text=" *" />}
    </View>
  );
};

export default RecipeSubTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: FWidth * 32,
  },
});
