import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import CAddRecipeButton from '../../components/Community/CAddRecipeButton';
import CListItems from '../../components/Community/CListItems';
import CListMenu from '../../components/Community/CListMenu';
import {menuList} from '../../utils/list';
import CTopTitle from './CTopTitle';

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
        onClick={onClick}
        scrollOffset={scrollOffset}
        setScrollOffset={setScrollOffset}
        setPrevScrollOffset={setPrevScrollOffset}
      />
      {userToken && (
        <CAddRecipeButton
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
