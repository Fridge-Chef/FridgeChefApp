import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';
import ContentComponent from './ContentComponent';

type RecipeComponentProps = {
  instructions: {
    content: string;
    imageLink: string;
  }[];
};

const RecipeComponent = ({instructions}: RecipeComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: FWidth * 24}}>
        <SubTitle2 title="조리 방법" />
      </View>
      {instructions.map((item, index) => {
        return (
          <ContentComponent
            id={index + 1}
            key={index}
            content={item.content}
            image={item.imageLink}
          />
        );
      })}
      {/* <UserRecipeMore /> */}
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
