import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../globalStyle';
import MainTop from '../../components/Community/AddRecipe/MainTop/MainTop';
import AddIngredient from '../../components/Community/AddRecipe/AddIngredient/AddIngredient';
import {AddIngredientType} from '../../type/types';
import RecipeSteps from '../../components/Community/AddRecipe/RecipeSteps/RecipeSteps';
import Submit from '../../components/Community/AddRecipe/Submit/Submit';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelectedCategory} from '../../store/store';
import {
  handleButtonColor,
  handlePreview,
  handleSubmit,
} from '../../service/Community/AddRecipe';

const AddRecipe = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {selectedCategory} = useSelectedCategory();
  const [addRecipeData, setAddRecipeData] = useState<AddIngredientType>({
    mainImage: '',
    mainImageFile: null,
    name: '',
    description: '',
    dishCategory: selectedCategory,
    dishTime: '',
    dishLevel: '쉬움',
    recipeIngredients: [{name: '', details: ''}],
    instructions: [{content: '', image: '', imageFile: null}],
  });

  useEffect(() => {
    setAddRecipeData(prevData => ({
      ...prevData,
      dishCategory: selectedCategory,
    }));
  }, [selectedCategory]);

  return (
    <View style={styles.buttonContainer}>
      <ScrollView overScrollMode="never">
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <MainTop
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
            selectedCategory={selectedCategory}
          />
          <AddIngredient
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
          />
          <RecipeSteps
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
          />
        </Pressable>
      </ScrollView>
      <Submit
        backgroundColor={handleButtonColor(addRecipeData)}
        previewOnPress={() => handlePreview(addRecipeData, navigation)}
        submitOnPress={() => handleSubmit(addRecipeData)}
      />
    </View>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
