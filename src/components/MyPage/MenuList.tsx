import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FButton from '../elements/FButton';

const MenuList = () => {
  const menu = [
    {id: 1, title: '공지사항'},
    {id: 2, title: '로그아웃'},
    {id: 3, title: '서비스 탈퇴'},
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
    paddingVertical: FWidth * 20,
    paddingLeft: FWidth * 22,
    paddingRight: FWidth * 16,
    borderRadius: 14,
    backgroundColor: colors.background2,
  },
});
