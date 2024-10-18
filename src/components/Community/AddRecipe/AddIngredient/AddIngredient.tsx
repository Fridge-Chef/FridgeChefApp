import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import AddIngredientTitle from './AddIngredientTitle';
import AddIngredientInputComponent from './AddIngredientInputComponent';
import AddRecipeSubButton from '../AddRecipeSubButton';
import {AddIngredientPageType, AddIngredientType} from '../../../../type/types';

const AddIngredient = ({
  addRecipeData,
  setAddRecipeData,
}: AddIngredientPageType) => {
  const addIngredient = () => {
    setAddRecipeData(prevData => ({
      ...prevData,
      ingredients: [...prevData.ingredients, {name: '', quantity: ''}],
    }));
  };

  const deleteIngredient = (index: number) => {
    setAddRecipeData(prevData => {
      const newIngredients = prevData.ingredients.filter((_, i) => i !== index);
      return {...prevData, ingredients: newIngredients};
    });
  };

  return (
    <View style={styles.container}>
      <AddIngredientTitle />
      {addRecipeData.ingredients.map((item, index) => (
        <AddIngredientInputComponent
          key={index}
          titleValue={item?.name}
          quantityValue={item?.quantity}
          onChangeTitleText={(text: string) =>
            setAddRecipeData(addRecipeData => {
              const newIngredients = [...addRecipeData.ingredients];
              newIngredients[index].name = text;
              return {...addRecipeData, ingredients: newIngredients};
            })
          }
          onChangeQuantityText={(text: string) =>
            setAddRecipeData(addRecipeData => {
              const newIngredients = [...addRecipeData.ingredients];
              newIngredients[index].quantity = text;
              return {...addRecipeData, ingredients: newIngredients};
            })
          }
          onPress={() =>
            addRecipeData.ingredients.length === 1
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
