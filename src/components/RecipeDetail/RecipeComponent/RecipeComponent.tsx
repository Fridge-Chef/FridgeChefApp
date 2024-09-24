import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import ContentComponent from './ContentComponent';
import {detailContent} from '../../../utils/list';

const RecipeComponent = () => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피" />
      <ContentComponent content={detailContent.content} />
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 12,
    paddingTop: FHeight * 24,
    paddingBottom: FHeight * 40,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
