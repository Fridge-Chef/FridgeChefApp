import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import UserInfo from '../RecipeDetail/RecipeReview/UserInfo';
import ViewAndLike from '../RecRecipe/ListItem/ViewAndLike';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';

const CListItems = () => {
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

export default CListItems;

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
