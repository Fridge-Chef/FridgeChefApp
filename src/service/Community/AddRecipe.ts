import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddIngredientType} from '../../type/types';
import {colors} from '../../../globalStyle';
import {UseMutateFunction} from '@tanstack/react-query';

export const handlePreview = (
  recipeData: AddIngredientType,
  navigation: NativeStackNavigationProp<ParamListBase>,
) => {
  if (
    recipeData.name.trim() === '' ||
    recipeData.description.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.dishCategory.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.recipeIngredients.length <= 1 ||
    recipeData.recipeIngredients[1].name.trim() === '' ||
    recipeData.instructions.length <= 1 ||
    recipeData.instructions[1].content.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요1');
    return;
  }
  console.log('데이터가 모두 입력되었습니다');
  navigation.navigate('preview', {
    recipeData,
  });
};

export const handlePreviewButtonColor = (recipeData: AddIngredientType) => {
  if (
    recipeData.name.trim() === '' ||
    recipeData.description.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.dishCategory.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.recipeIngredients.length <= 1 ||
    recipeData.recipeIngredients[1].name.trim() === '' ||
    recipeData.instructions.length <= 1 ||
    recipeData.instructions[1].content.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요2');
    return colors.b200;
  } else {
    return colors.text;
  }
};

export const handleButtonColor = (recipeData: AddIngredientType) => {
  if (
    recipeData.name.trim() === '' ||
    recipeData.description.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.dishCategory.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.recipeIngredients.length <= 1 ||
    recipeData.recipeIngredients[1].name.trim() === '' ||
    recipeData.instructions.length <= 1 ||
    recipeData.instructions[1].content.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요2');
    return colors.b200;
  } else {
    return colors.primary[1];
  }
};

export const handleSubmit = async (
  recipeData: AddIngredientType,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  mutate: UseMutateFunction<any, Error, AddIngredientType, unknown>,
  refetch: () => void,
  myRecipe: () => void,
  navigate: NativeStackNavigationProp<ParamListBase>,
) => {
  if (
    recipeData.name.trim() === '' ||
    recipeData.description.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.dishCategory.trim() === '' ||
    recipeData.dishLevel.trim() === '' ||
    recipeData.recipeIngredients.length <= 1 ||
    recipeData.recipeIngredients[1].name.trim() === '' ||
    recipeData.instructions.length <= 1 ||
    recipeData.instructions[1].content.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요3');
    return;
  } else {
    setIsLoading(true);
    mutate(recipeData, {
      onSuccess: () => {
        console.log('레시피 추가 성공');
        setIsLoading(false);
        refetch();
        myRecipe();
        navigate.goBack();
      },
    });
  }
};
