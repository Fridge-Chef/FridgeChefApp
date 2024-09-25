import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../globalStyle';
import TopComponent from '../../components/RecRecipe/TopComponent';
import Recipes from '../../components/RecRecipe/ListItem/Recipes';
const RecRecipe = () => {
  return (
    <View style={styles.container}>
      <TopComponent />
      <View style={{flex: 1}}>
        <Recipes />
      </View>
    </View>
  );
};

export default RecRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FHeight * 24,
    paddingBottom: FHeight * 26,
    paddingHorizontal: FWidth * 22,
    backgroundColor: 'white',
  },
});
