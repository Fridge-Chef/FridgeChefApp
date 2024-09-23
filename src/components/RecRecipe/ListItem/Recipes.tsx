import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListItem from './ListItem';
import {RecipeListType} from '../../../type/types';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import SubTitleComponent from '../../Ingredients/SubTitleComponent';

const Recipes = () => {
  const listData = require('../../../utils/recipeListData.json');

  return (
    <View style={styles.mainListContainer}>
      <View style={styles.titleContainer}>
        <SubTitleComponent title="최근순" color={colors.subText} />
        <View style={{marginLeft: FWidth * 4}}>
          <SvgImage type="arrowDown2" width={18} height={18} />
        </View>
      </View>
      <FlatList
        data={listData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: FHeight * 40}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}: {item: RecipeListType}) => (
          <ListItem item={item} />
        )}
      />
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  mainListContainer: {
    marginTop: FHeight * 24,
    height: '100%',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
