import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../MyFridge/Ingredients/SubTitleComponent';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import {colors, FWidth} from '../../../globalStyle';
import ListItem from './ListItem';

const ListComponent = () => {
  const list = require('../../utils/recipeListData.json');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubTitleComponent title="최근순" color={colors.subText} />
        <View style={{marginLeft: FWidth * 4}}>
          <ArrowDown2 />
        </View>
      </View>
      <View style={{marginTop: FWidth * 12}}>
        <View style={styles.subContainer}>
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <ListItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subContainer: {
    marginTop: FWidth * -12,
  },
});
