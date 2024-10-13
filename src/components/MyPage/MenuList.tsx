import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FButton from '../elements/FButton';

const MenuList = () => {
  const menu = [
    {id: 1, title: '프리지셰프 소개'},
    {id: 2, title: '로그아웃'},
    {id: 3, title: '회원 탈퇴'},
  ];

  return (
    <>
      {menu.map(item => (
        <FButton
          key={item.id}
          buttonStyle="noneStyle"
          fBStyle={styles.menuButton}
          onPress={() => {
            console.log('name', item.title);
          }}>
          <FText fStyle="M_16" color={colors.text} text={item.title} />
        </FButton>
      ))}
    </>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  menuButton: {
    marginTop: FWidth * 12,
    paddingVertical: FWidth * 19,
    paddingLeft: FWidth * 21,
    paddingRight: FWidth * 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
});
