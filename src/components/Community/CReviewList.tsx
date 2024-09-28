import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';

const CReviewList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubTitleComponent title="최근순" color={colors.subText} />
        <View style={{marginLeft: FWidth * 4}}>
          <ArrowDown2 />
        </View>
      </View>
      <FlatList
        data={myRecipes}
        overScrollMode="never"
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
    marginTop: FWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
