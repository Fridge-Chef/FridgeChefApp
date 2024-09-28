import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import {menuList2} from '../../utils/list';
import CListMenu from '../../components/Community/CListMenu';
import CReviewList from '../../components/Community/CReviewList';

const CRecipeReview = () => {
  const [onClick, setonClick] = useState(1);

  return (
    <View style={styles.container}>
      <CListMenu onClick={onClick} setonClick={setonClick} list={menuList2} />
      <CReviewList />
    </View>
  );
};

export default CRecipeReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
