import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import {AddIngredientPageType} from '../../../../type/types';
import StepTitle from './StepTitle';
import StepITem from './StepItem/StepITem';
import AddRecipeSubButton from '../AddRecipeSubButton';
import {handleImagePicker} from '../../../../service/SingleImagePicker';

const RecipeSteps = ({
  addRecipeData,
  setAddRecipeData,
}: AddIngredientPageType) => {
  const handleImage = (index: number) =>
    handleImagePicker({
      pickerType: 'imageLibrary',
      handleImage(imageUri, file) {
        setAddRecipeData(addRecipeData => {
          const newStep = [...addRecipeData.instructions];
          newStep[index].imageFile = file;
          newStep[index].image = imageUri;
          return {...addRecipeData, instructions: newStep};
        });
      },
    });

  const addStep = () => {
    setAddRecipeData(prevData => ({
      ...prevData,
      instructions: [
        ...prevData.instructions,
        {content: '', image: '', imageFile: null},
      ],
    }));
  };

  const deleteStep = (index: number) => {
    setAddRecipeData(prevData => {
      const newStep = prevData.instructions.filter((_, i) => i !== index);
      return {...prevData, instructions: newStep};
    });
  };

  return (
    <View style={styles.container}>
      <StepTitle />
      {addRecipeData.instructions.map((item, index) => (
        <StepITem
          key={index}
          index={index + 1}
          uri={item?.image}
          textValue={item?.content}
          onChangeText={text => {
            setAddRecipeData(addRecipeData => {
              const newStep = [...addRecipeData.instructions];
              newStep[index].content = text;
              return {...addRecipeData, content: newStep};
            });
          }}
          deleteOnPress={() =>
            addRecipeData.instructions.length === 1 ? null : deleteStep(index)
          }
          imageOnPress={() => handleImage(index)}
          imageDeleteOnPress={() => {
            setAddRecipeData(addRecipeData => {
              const newStep = [...addRecipeData.instructions];
              newStep[index].image = '';
              return {...addRecipeData, content: newStep};
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
