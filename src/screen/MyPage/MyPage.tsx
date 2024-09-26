import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import UserStatus from '../../components/MyPage/UserStatus';
import RecipeActions from '../../components/MyPage/RecipeActions';
import MenuList from '../../components/MyPage/MenuList';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <View style={styles.textLine}>
          <Text style={[fontStyles.B_18, styles.textColor]}>설정</Text>
        </View>
      </View>
      <UserStatus />
      <RecipeActions />
      <MenuList />
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },

  mainTitleContainer: {
    paddingVertical: FWidth * 10,
  },

  textLine: {
    height: FWidth * 28,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
