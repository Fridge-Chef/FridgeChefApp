import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ContentComponent from './ContentComponent';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';

type RecipeComponentProps = {
  detailContent: {
    step: string;
    image: string;
  }[];
};

const RecipeComponent = ({detailContent}: RecipeComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: FWidth * 24}}>
        <SubTitle2 title="조리 방법" />
      </View>
      {detailContent.map((item, index) => {
        return (
          <ContentComponent
            id={index + 1}
            key={index}
            step={item.step}
            image={item.image}
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
    // paddingBottom: FWidth * 40,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
