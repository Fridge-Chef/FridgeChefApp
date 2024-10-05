import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import ContentComponent from './ContentComponent';
import {detailContent} from '../../../../utils/list';

const RecipeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: FWidth * 24}}>
        <SubTitleComponent title="조리 방법" />
      </View>
      {detailContent.map(item => (
        <ContentComponent
          id={item.content.id}
          key={item.content.id}
          title={item.content.title}
          content={item.content.content}
          img={item.content.img}
        />
      ))}
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
