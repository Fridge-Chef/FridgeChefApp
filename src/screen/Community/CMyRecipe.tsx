import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import CListMenu from '../../components/Community/CListMenu';
import {menuList} from '../../utils/list';
import CListItems from '../../components/Community/CListItems';
import CAddReviewButton from '../../components/Community/CAddReviewButton';
import EditSquare from '../../utils/Svg/EditSquare';

const CMyRecipe = () => {
  const [onClick, setonClick] = useState(1);
  const [scrollOffset, setScrollOffset] = useState(-0.1);
  const [prevScrollOffset, setPrevScrollOffset] = useState(0);

  return (
    <View style={styles.container}>
      <CListMenu onClick={onClick} setonClick={setonClick} list={menuList} />
      <CListItems
        scrollOffset={scrollOffset}
        setScrollOffset={setScrollOffset}
        setPrevScrollOffset={setPrevScrollOffset}
      />
      <CAddReviewButton
        list={menuList}
        scrollOffset={scrollOffset}
        prevScrollOffset={prevScrollOffset}
      />
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