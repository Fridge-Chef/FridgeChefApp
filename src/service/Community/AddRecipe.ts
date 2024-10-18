import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AddIngredientType} from '../../type/types';
import {colors} from '../../../globalStyle';

export const handlePreview = (
  recipeData: AddIngredientType,
  navigation: NativeStackNavigationProp<ParamListBase>,
) => {
  if (
    recipeData.mainTitle.trim() === '' ||
    recipeData.mainContent.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.cookTime.trim() === '' ||
    recipeData.categories.foodStyle.trim() === '' ||
    recipeData.categories.foodType.trim() === '' ||
    recipeData.cookLevel.trim() === '' ||
    recipeData.ingredients.length <= 1 ||
    recipeData.ingredients[1].name.trim() === '' ||
    recipeData.step.length <= 1 ||
    recipeData.step[1].step.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요1');
    return;
  }
  console.log('데이터가 모두 입력되었습니다', recipeData);
  navigation.navigate('preview', {
    recipeData,
  });
};

export const handleButtonColor = (recipeData: AddIngredientType) => {
  if (
    recipeData.mainTitle.trim() === '' ||
    recipeData.mainContent.trim() === '' ||
    recipeData.mainImage.trim() === '' ||
    recipeData.cookTime.trim() === '' ||
    recipeData.categories.foodStyle.trim() === '' ||
    recipeData.categories.foodType.trim() === '' ||
    recipeData.cookLevel.trim() === '' ||
    recipeData.ingredients.length <= 1 ||
    recipeData.ingredients[1].name.trim() === '' ||
    recipeData.step.length <= 1 ||
    recipeData.step[1].step.trim() === ''
  ) {
    console.log('데이터를 모두 입력해주세요2');
    return colors.b200;
  } else {
    return colors.primary[1];
  }
};

export const handleSubmit = async () => {};
