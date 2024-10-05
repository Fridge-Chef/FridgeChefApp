import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipeSubTitle from '../RecipeSubTitle';
import FInput from '../../../elements/FInput';
import {FWidth} from '../../../../../globalStyle';
import AddTitleInput from './AddTitleInput';
import ContentTitleInput from './ContentTitleInput';
import {AddIngredientType} from '../../../../type/types';

const InputContent = ({addRecipeData, setAddRecipeData}: AddIngredientType) => {
  return (
    <View>
      <RecipeSubTitle title="요리명" required={true} />
      <View style={styles.inputContainer}>
        <AddTitleInput
          value={addRecipeData?.mainTitle}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, mainTitle: text});
          }}
        />
      </View>
      <RecipeSubTitle title="레시피 소개" />
      <View style={styles.inputContainer}>
        <ContentTitleInput
          value={addRecipeData?.mainContent}
          onChangeText={text => {
            setAddRecipeData({...addRecipeData, mainContent: text});
          }}
        />
      </View>
    </View>
  );
};

export default InputContent;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FWidth * 8,
  },
});
