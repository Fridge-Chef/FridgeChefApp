import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ListItem from './ListItem';
import {RecipeListType} from '../../../../type/types';
import {FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../../store/store';
import RankButton from './RankButton';

const Recipes = () => {
  const listData = require('../../../../utils/recipeListData.json');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();

  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainListContainer}>
        <RankButton onPress={handleBottomSheetOpen} />
        <FlatList
          data={listData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: FWidth * 146,
          }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: RecipeListType}) => (
            <FButton
              buttonStyle="noneStyle"
              onPress={() =>
                navigation.navigate('recipeDetail', {
                  title: item.title,
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
    flex: 1,
    marginTop: FWidth * 32,
  },

  mainListContainer: {
    height: '100%',
  },
});
