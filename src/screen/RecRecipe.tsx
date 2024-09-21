import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, fontFamilies, FWidth} from '../../globalStyle';
import {list} from '../utils/list';
import SubTitleComponent from '../components/Ingredients/SubTitleComponent';
import ListItem from '../components/RecRecipe/ListItem/ListItem';
import {RecipeListType} from '../type/types';
const RecRecipe = () => {
  const listData = require('../utils/recipeListData.json');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>추천 레시피</Text>
      </View>
      <View style={styles.subTitleTextContainer}>
        <Text style={styles.subTitleText}>보유 재료들</Text>
        <Text style={styles.subTitleButton}>주재료 선택</Text>
      </View>
      <View style={styles.itemListContainer}>
        {list.map(item => (
          <View key={item.id} style={styles.listItem}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={{flex: 1}}>
        <SubTitleComponent title="별점 높은순" />
        <View style={styles.mainListContainer}>
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
      </View>
    </View>
  );
};

export default RecRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: FHeight * 16,
    paddingHorizontal: FWidth * 22,
    backgroundColor: 'white',
  },

  titleContainer: {
    marginBottom: FHeight * 22,
  },

  titleText: {
    color: colors.black,
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 24,
    lineHeight: FHeight * 34,
  },

  subTitleTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: FHeight * 16,
  },

  subTitleText: {
    color: colors.black,
    fontFamily: fontFamilies.pretendardSemiBold,
  },

  subTitleButton: {
    color: '#545559',
    textDecorationLine: 'underline',
  },

  itemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'red',
    marginBottom: FHeight * 35,
  },

  listItem: {
    paddingHorizontal: FWidth * 12,
    paddingVertical: FHeight * 8,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-start',
    marginRight: FWidth * 8,
  },

  itemText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fontFamilies.pretendardMedium,
  },

  mainListContainer: {
    height: '100%',
    marginTop: FHeight * 8,
  },
});
