import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

const MenuList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <FText fStyle="M_16" color={colors.text} text="로그아웃" />
      </View>
      <View style={[styles.menuContainer, {borderTopWidth: 0}]}>
        <FText fStyle="M_16" color={colors.text} text="회원탈퇴" />
      </View>
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  menuContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.b100,
    paddingVertical: FWidth * 24,
  },
});
