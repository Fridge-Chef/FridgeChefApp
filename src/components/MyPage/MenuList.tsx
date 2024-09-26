import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

const MenuList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.textLine}>
          <Text style={[fontStyles.M_16, styles.textColor]}>로그아웃</Text>
        </View>
      </View>
      <View style={[styles.menuContainer, {borderTopWidth: 0}]}>
        <View style={styles.textLine}>
          <Text style={[fontStyles.M_16, styles.textColor]}>회원탈퇴</Text>
        </View>
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

  textLine: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
