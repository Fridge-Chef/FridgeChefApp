import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import AddIngredientTitle from './AddIngredientTitle';
import AddIngredientInputComponent from './AddIngredientInputComponent';
import AddRecipeSubButton from '../AddRecipeSubButton';
import {AddIngredientPageType} from '../../../../type/types';

const AddIngredient = ({
  addRecipeData,
  setAddRecipeData,
}: AddIngredientPageType) => {
  const addIngredient = () => {
    setAddRecipeData(prevData => ({
      ...prevData,
      recipeIngredients: [
        ...prevData.recipeIngredients,
        {name: '', details: ''},
      ],
    }));
  };

  const deleteIngredient = (index: number) => {
    setAddRecipeData(prevData => {
      const newIngredients = prevData.recipeIngredients.filter(
        (_, i) => i !== index,
      );
      return {...prevData, recipeIngredients: newIngredients};
    });
  };

  return (
    <View style={styles.container}>
      <AddIngredientTitle />
      {addRecipeData.recipeIngredients.map((item, index) => (
        <AddIngredientInputComponent
          key={index}
          titleValue={item?.name}
          quantityValue={item?.details}
          onChangeTitleText={(text: string) =>
            setAddRecipeData(addRecipeData => {
              const newIngredients = [...addRecipeData.recipeIngredients];
              newIngredients[index].name = text;
              return {...addRecipeData, recipeIngredients: newIngredients};
            })
          }
          onChangeQuantityText={(text: string) =>
            setAddRecipeData(addRecipeData => {
              const newIngredients = [...addRecipeData.recipeIngredients];
              newIngredients[index].details = text;
              return {...addRecipeData, recipeIngredients: newIngredients};
            })
          }
          onPress={() =>
            addRecipeData.recipeIngredients.length === 1
              ? null
              : deleteIngredient(index)
          }
        />
      ))}
      <View style={styles.buttonContainer}>
        <AddRecipeSubButton title="+ 재료 추가하기" onPress={addIngredient} />
      </View>
    </View>
  );
};

export default AddIngredient;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingBottom: FWidth * 32,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },

  buttonContainer: {
    marginTop: FWidth * 12,
  },
});
