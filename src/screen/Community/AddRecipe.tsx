import {Keyboard, Pressable, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../globalStyle';
import MainTop from '../../components/Community/AddRecipe/MainTop/MainTop';
import AddIngredient from '../../components/Community/AddRecipe/AddIngredient/AddIngredient';
import {Ingredient, StepType} from '../../type/types';
import RecipeSteps from '../../components/Community/AddRecipe/RecipeSteps/RecipeSteps';
import Submit from '../../components/Community/AddRecipe/Submit/Submit';

const AddRecipe = () => {
  const [addRecipeData, setAddRecipeData] = useState<{
    mainImage: string;
    mainTitle: string;
    mainContent: string;
    ingredients: Ingredient[];
    step: StepType[];
  }>({
    mainImage: '',
    mainTitle: '',
    mainContent: '',
    ingredients: [{name: '', quantity: ''}],
    step: [{step: '', image: ''}],
  });

  const addNewIngredient = () => {
    setAddRecipeData(prevData => ({
      ...prevData,
      ingredients: [...prevData.ingredients, {name: '', quantity: ''}],
    }));
  };

  const addStep = () => {
    setAddRecipeData(prevData => ({
      ...prevData,
      step: [...prevData.step, {step: '', image: ''}],
    }));
  };

  const deleteIngredient = (index: number) => {
    setAddRecipeData(prevData => {
      const newIngredients = prevData.ingredients.filter((_, i) => i !== index);
      return {...prevData, ingredients: newIngredients};
    });
  };

  const deleteStep = (index: number) => {
    setAddRecipeData(prevData => {
      const newStep = prevData.step.filter((_, i) => i !== index);
      return {...prevData, step: newStep};
    });
  };

  console.log('addRecipeData', addRecipeData);
  return (
    <ScrollView overScrollMode="never">
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <MainTop
          addRecipeData={addRecipeData}
          setAddRecipeData={setAddRecipeData}
        />
        <AddIngredient
          addRecipeData={addRecipeData}
          setAddRecipeData={setAddRecipeData}
          addIngredient={addNewIngredient}
          deleteIngredient={deleteIngredient}
        />
        <RecipeSteps
          addRecipeData={addRecipeData}
          setAddRecipeData={setAddRecipeData}
          addStep={addStep}
          deleteStep={deleteStep}
        />
        <Submit />
      </Pressable>
    </ScrollView>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
