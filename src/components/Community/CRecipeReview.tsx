import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import {menuList2} from '../../utils/list';
import CListMenu from './CListMenu';

const CRecipeReview = () => {
  const [onClick, setonClick] = useState(1);

  return (
    <View style={styles.container}>
      <CListMenu onClick={onClick} setonClick={setonClick} list={menuList2} />
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
