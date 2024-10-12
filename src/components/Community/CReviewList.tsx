import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';

const CReviewList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle />
      </View>
      <FlatList
        data={myRecipes}
        overScrollMode="never"
        contentContainerStyle={{paddingBottom: FWidth * 20}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CListItem item={item} onPress={() => console.log(item.id)} />
        )}
      />
    </View>
  );
};

export default CReviewList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: FWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
