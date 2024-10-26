import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import {GetRecipeListType, RecipeListType} from '../../../../type/types';
import {FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from './RankButton';
import {useGetRecommendedRecipeList} from '../../../../api/recipeQuery';

const Recipes = () => {
  const listData = require('../../../../utils/detailListData.json');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();
  const {data} = useGetRecommendedRecipeList({page: 1, size: 10});
  console.log('데이터', data);
  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainListContainer}>
        <RankButton onPress={handleBottomSheetOpen} />
        <FlatList
          scrollEnabled={false}
          data={listData}
          contentContainerStyle={{
            paddingBottom: FWidth * 146,
          }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: RecipeListType}) => (
            <FButton
              buttonStyle="noneStyle"
              onPress={() =>
                navigation.navigate('recipeDetail', {
                  id: item.id - 1,
                })
              }>
              <ListItem item={item} />
            </FButton>
          )}
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
