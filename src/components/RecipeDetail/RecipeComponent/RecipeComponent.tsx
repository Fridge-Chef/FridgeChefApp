import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import ContentComponent from './ContentComponent';
import {detailContent} from '../../../utils/list';
import UserRecipeMore from '../MoreUserRecipe/UserRecipeMore';
import Num from '../../../utils/Svg/Num';

const RecipeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: FWidth * 24}}>
        <SubTitleComponent title="레시피" />
      </View>
      <ContentComponent
        title={detailContent.content.title}
        content={detailContent.content.content}
        img={detailContent.content.img}>
        <Num />
      </ContentComponent>
      {/* <UserRecipeMore /> */}
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingTop: FWidth * 24,
    // paddingBottom: FWidth * 40,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
