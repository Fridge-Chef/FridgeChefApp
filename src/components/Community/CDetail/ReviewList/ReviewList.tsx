import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import TopTitle from './TopTitle';
import {myRecipes} from '../../../../utils/list';
import CListItem from '../../CListItem';

const ReviewList = () => {
  return (
    <View style={styles.container}>
      <TopTitle />
      <View style={styles.listContainer}>
        {myRecipes.slice(0, 3).map(item => (
          <CListItem
            key={item.id}
            item={item}
            onPress={() => console.log(item.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: FWidth * 12,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 32,
  },

  listContainer: {
    marginTop: FWidth * 24,
    marginBottom: FWidth * 140,
  },
});
