import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import ListItem from './ListItem';
import {GetRecipeListType, ListData} from '../../../../type/types';
import {FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from './RankButton';
import {useGetRecommendedRecipeList} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';

type RecipesProps = {
  ingredientList: ListData[];
};

const Recipes = ({ingredientList}: RecipesProps) => {
  const ingredients = ingredientList.map(item => item.ingredientName);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const {data, isLoading} = useGetRecommendedRecipeList(ingredients);
  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      <View style={styles.mainListContainer}>
        <RankButton onPress={handleBottomSheetOpen} />
        <FlatList
          scrollEnabled={false}
          data={data?.content}
          contentContainerStyle={{
            paddingBottom: FWidth * 146,
          }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: GetRecipeListType}) => {
            return (
              <FButton
                buttonStyle="noneStyle"
                onPress={() =>
                  navigation.navigate('recipeDetail', {
                    id: item.id,
                    without: item.without,
                    myIngredients: ingredients,
                  })
                }>
                <ListItem item={item} />
              </FButton>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  mainListContainer: {
    height: '100%',
  },
});
