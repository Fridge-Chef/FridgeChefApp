import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import ImageComponent from '../elements/ImageComponent';
import Close from '../../utils/Svg/Close';
import ViewAndLike from '../RecRecipe/ListItem/ViewAndLike';
import ListItem from './ListItem';

const ListComponent = () => {
  const list = require('../../utils/recipeListData.json');
  return (
    <View>
      <View style={styles.container}>
        <SubTitleComponent title="최근순" color={colors.subText} />
        <View style={{marginLeft: FWidth * 4}}>
          <ArrowDown2 />
        </View>
      </View>
      <View style={{marginTop: FWidth * 12}}>
        <View style={styles.subContainer}>
          <FlatList
            data={list}
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
    flexDirection: 'row',
    alignItems: 'center',
  },

  subContainer: {
    marginTop: FWidth * -12,
  },
});
