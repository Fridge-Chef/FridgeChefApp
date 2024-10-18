import {
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import ListItem from './ListItem';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';

type ListComponentProps = {
  name: string;
  renderItem: ListRenderItem<any>;
  onPress: () => void;
};

const ListComponent = ({name, renderItem, onPress}: ListComponentProps) => {
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
            renderItem={renderItem}
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
