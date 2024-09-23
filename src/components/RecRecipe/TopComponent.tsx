import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import {colors, FHeight, fontFamilies, FWidth} from '../../../globalStyle';
import {list} from '../../utils/list';

const TopComponent = () => {
  return (
    <View>
      <SubTitleComponent title="보유 재료들" color={colors.subText} />
      <View style={styles.itemListContainer}>
        <FlatList
          data={list}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={list => list.id.toString()}
          renderItem={({item}) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  itemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'red',
    marginTop: FHeight * 16,
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
});
