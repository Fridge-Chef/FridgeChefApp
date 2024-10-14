import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import {AddIngredientType} from '../../../../type/types';
import StepTitle from './StepTitle';
import StepITem from './StepItem/StepITem';
import AddRecipeSubButton from '../AddRecipeSubButton';
import {handleImagePicker} from '../../../../service/SingleImagePicker';

type RecipeStepsProps = {
  addStep: () => void;
  deleteStep: (index: number) => void;
};

const RecipeSteps = ({
  addRecipeData,
  setAddRecipeData,
  addStep,
  deleteStep,
}: AddIngredientType & RecipeStepsProps) => {
  const handleImage = (index: number) =>
    handleImagePicker({
      pickerType: 'imageLibrary',
      handleImage(imageUri) {
        setAddRecipeData(addRecipeData => {
          const newStep = [...addRecipeData.step];
          newStep[index].image = imageUri;
          return {...addRecipeData, step: newStep};
        });
      },
    });

  return (
    <View style={styles.container}>
      <StepTitle />
      {addRecipeData.step.map((item, index) => (
        <StepITem
          key={index}
          index={index + 1}
          uri={item?.image}
          textValue={item?.step}
          onChangeText={text => {
            setAddRecipeData(addRecipeData => {
              const newStep = [...addRecipeData.step];
              newStep[index].step = text;
              return {...addRecipeData, step: newStep};
            });
          }}
          deleteOnPress={() =>
            addRecipeData.step.length === 1 ? null : deleteStep(index)
          }
          imageOnPress={() => handleImage(index)}
          imageDeleteOnPress={() => {
            setAddRecipeData(addRecipeData => {
              const newStep = [...addRecipeData.step];
              newStep[index].image = '';
              return {...addRecipeData, step: newStep};
            });
          }}
        />
      ))}
      <View style={styles.buttonContainer}>
        <AddRecipeSubButton title="+ 단계 추가하기" onPress={addStep} />
      </View>
    </View>
  );
};

export default RecipeSteps;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },

  buttonContainer: {
    marginBottom: FWidth * 133,
  },
});
