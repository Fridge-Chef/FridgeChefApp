import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ListItem from './ListItem';
import {RecipeListType} from '../../../type/types';
import {colors, FWidth} from '../../../../globalStyle';
import SubTitleComponent from '../../Ingredients/SubTitleComponent';
import FButton from '../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ArrowDown2 from '../../../utils/Svg/ArrowDown2';
import {useBottomSheetRef, useBottomSheetTitle} from '../../../store/store';
import RankArrow from '../../../utils/Svg/RankArrow';
import RankButton from './RankButton';

const Recipes = () => {
  const listData = require('../../../utils/recipeListData.json');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {setTitle} = useBottomSheetTitle();

  const handleBottomSheetOpen = () => {
    setTitle('순위');
    bottomSheetRef.current?.expand();
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
  },

  mainListContainer: {
    marginTop: FWidth * 24,
    height: '100%',
  },
});
