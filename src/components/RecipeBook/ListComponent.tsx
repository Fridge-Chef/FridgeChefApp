import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import ListItem from './ListItem';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';
import {useMyRecipeRankName} from '../../store/rankingStore';

type ListComponentProps = {
  name: string;
  onPress: () => void;
};

const ListComponent = ({name, onPress}: ListComponentProps) => {
  const list = require('../../utils/recipeListData.json');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle onPress={onPress} name={name} />
      </View>
      <View style={{marginTop: FWidth * 12}}>
        <View style={styles.subContainer}>
          <FlatList
            data={list}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <ListItem item={item} onPress={() => {}} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subContainer: {
    marginTop: FWidth * -12,
  },
});
