import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import CListMenu from './CListMenu';
import {menuList} from '../../utils/list';
import CListItems from './CListItems';
import CAddReviewButton from './CAddReviewButton';

const CMyRecipe = () => {
  return (
    <View style={styles.container}>
      <CListMenu list={menuList} />
      <CListItems />
      <CAddReviewButton list={menuList} />
    </View>
  );
};

export default CMyRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
