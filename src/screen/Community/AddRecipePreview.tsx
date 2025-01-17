import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import PCloseButton from '../../components/Community/AddRecipe/Preview/PCloseButton';
import PreviewTitle from '../../components/Community/AddRecipe/Preview/PreviewTitle';
import FImage from '../../components/elements/FImage';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import {AddIngredientType} from '../../type/types';

type AddRecipePreviewProps = {
  params: {
    recipeData: AddIngredientType;
  };
};

const AddRecipePreview = () => {
  const route = useRoute<RouteProp<AddRecipePreviewProps>>();
  const item = route.params.recipeData;
  const [userName, setUserName] = useState('');

  const getUserName = async () => {
    const name = await AsyncStorage.getItem('nickname');
    if (name) setUserName(name);
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <FImage uri={item.mainImage} imgStyle="detail" />
      </View>
      <PreviewTitle
        username={userName}
        title={item.name}
        dishCategory={item.dishCategory}
        dishTime={item.dishTime}
        dishLevel={item.dishLevel}
      />
      <RecipeNote content={item.description} />
      <IngredientComponent recipeIngredients={item.recipeIngredients} />
      <RecipeComponent instructions={item.instructions} />
      <PCloseButton />
    </ScrollView>
  );
};

export default AddRecipePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
