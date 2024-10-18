import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FButton from '../elements/FButton';
import {handleLogout} from '../../service/MyPage/MyPage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FModal from '../elements/FModal';

const MenuList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [logout, setLogout] = useState(false);
  const menu = [
    {id: 1, title: '프리지셰프 소개'},
    {id: 2, title: '로그아웃'},
    {id: 3, title: '회원 탈퇴'},
  ];

  const handleMenu = (title: string) => {
    switch (title) {
      case '프리지셰프 소개':
        return console.log('프리지셰프 소개');
      case '로그아웃':
        return setLogout(true);
      case '회원 탈퇴':
        return console.log('회원 탈퇴');
      default:
        return;
    }
  };

  return (
    <>
      {logout &&
        FModal({
          modalVisible: logout,
          cancel: true,
          text: '로그아웃 하시겠습니까?',
          buttonText: '확인',
          cancelText: '취소',
          cancelOnPress() {
            setLogout(false);
          },
          onPress: () => handleLogout({navigation, setLogout}),
        })}
      {menu.map(item => (
        <FButton
          key={item.id}
          buttonStyle="noneStyle"
          fBStyle={styles.menuButton}
          onPress={() => {
            handleMenu(item.title);
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
