import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import UserStatus from '../../components/MyPage/UserStatus';
import RecipeActions from '../../components/MyPage/RecipeActions';
import MenuList from '../../components/MyPage/MenuList';
import FText from '../../components/elements/FText';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View style={styles.mainTitleContainer}>
          <FText fStyle="B_18" color={colors.text} text="설정" />
        </View>
        <UserStatus />
        <MenuList />
      </ScrollView>
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
    paddingVertical: FWidth * 12,
  },
});
