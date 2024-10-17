import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../globalStyle';
import MainTop from '../../components/Community/AddRecipe/MainTop/MainTop';
import AddIngredient from '../../components/Community/AddRecipe/AddIngredient/AddIngredient';
import {Ingredient, StepType} from '../../type/types';
import RecipeSteps from '../../components/Community/AddRecipe/RecipeSteps/RecipeSteps';
import Submit from '../../components/Community/AddRecipe/Submit/Submit';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelectedCategory} from '../../store/store';

const AddRecipe = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {selectedCategory} = useSelectedCategory();
  const [addRecipeData, setAddRecipeData] = useState<{
    mainImage: string;
    mainTitle: string;
    mainContent: string;
    categories: {foodStyle: string; foodType: string};
    cookTime: string;
    cookLevel: string;
    ingredients: Ingredient[];
    step: StepType[];
  }>({
    mainImage: '',
    mainTitle: '',
    mainContent: '',
    categories: selectedCategory,
    cookTime: '',
    cookLevel: '쉬움',
    ingredients: [{name: '', quantity: ''}],
    step: [{step: '', image: ''}],
  });

  useEffect(() => {
    setAddRecipeData(prevData => ({
      ...prevData,
      categories: selectedCategory,
    }));
  }, [selectedCategory]);

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

  const handlePreview = () => {
    if (
      addRecipeData.mainTitle === '' ||
      addRecipeData.mainContent === '' ||
      addRecipeData.mainImage === '' ||
      addRecipeData.cookTime === '' ||
      addRecipeData.categories.foodStyle === '' ||
      addRecipeData.categories.foodType === '' ||
      addRecipeData.cookLevel === '' ||
      addRecipeData.ingredients.length <= 1 ||
      addRecipeData.step.length <= 1
    ) {
      return;
    }
    navigation.navigate('preview', {
      addRecipeData,
    });
  };

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
            addIngredient={addNewIngredient}
            deleteIngredient={deleteIngredient}
          />
          <RecipeSteps
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
            addStep={addStep}
            deleteStep={deleteStep}
          />
        </Pressable>
      </ScrollView>
      <Submit previewOnPress={handlePreview} submitOnPress={() => {}} />
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
