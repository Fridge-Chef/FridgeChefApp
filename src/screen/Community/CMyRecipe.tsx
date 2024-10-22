import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../globalStyle';
import CListMenu from '../../components/Community/CListMenu';
import {menuList} from '../../utils/list';
import CListItems from '../../components/Community/CListItems';
import CTopTitle from './CTopTitle';
import CAddRecipeButton from '../../components/Community/CAddRecipeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetRecipeListType} from '../../type/types';
import {getRecipeList} from '../../api/recipe';

const CMyRecipe = () => {
  const [onClick, setonClick] = useState(1);
  const [scrollOffset, setScrollOffset] = useState(-0.1);
  const [prevScrollOffset, setPrevScrollOffset] = useState(0);
  const [userToken, setUserToken] = useState<string | null>('');

  useEffect(() => {
    const getUserToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setUserToken(token);
    };
    getUserToken();
  }, []);

  return (
    <View style={styles.container}>
      <CTopTitle />
      <CListMenu onClick={onClick} setonClick={setonClick} list={menuList} />
      <CListItems
        scrollOffset={scrollOffset}
        setScrollOffset={setScrollOffset}
        setPrevScrollOffset={setPrevScrollOffset}
      />
      {userToken && (
        <CAddRecipeButton
          list={menuList}
          scrollOffset={scrollOffset}
          prevScrollOffset={prevScrollOffset}
        />
      )}
    </View>
  );
};

export default CMyRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
  },
});
