import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FButton from '../elements/FButton';
import {handleLogout, handleUserDelete} from '../../service/MyPage/MyPage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FModal from '../elements/FModal';
import {UserData} from '../../type/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQueryClient} from '@tanstack/react-query';

type MenuListProps = {
  userData: UserData;
};

const MenuList = ({userData}: MenuListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const queryClient = useQueryClient();
  const [logout, setLogout] = useState(false);
  const [userDelete, setUserDelete] = useState(false);
  const menu = [
    // {id: 1, title: '프리지셰프 소개'},
    {id: 1, title: '로그아웃'},
    {id: 2, title: '회원 탈퇴'},
  ];

  const handleMenu = (title: string) => {
    switch (title) {
      case '프리지셰프 소개':
        return console.log('프리지셰프 소개');
      case '로그아웃':
        return setLogout(true);
      case '회원 탈퇴':
        return setUserDelete(true);
      default:
        return;
    }
  };

  return (
    <>
      {(logout || userDelete) &&
        FModal({
          modalVisible: logout || userDelete,
          cancel: true,
          text: logout ? '로그아웃 하시겠습니까?' : '정말 떠나시나요?',
          text2: userDelete ? '더 나은 서비스로 뵙길 바랄게요.' : null,
          buttonText: '확인',
          cancelText: '취소',
          cancelOnPress() {
            if (logout) {
              setLogout(false);
            } else {
              setUserDelete(false);
              console.log('유저네임', userData.user.username);
            }
          },
          onPress: async () => {
            if (logout) {
              queryClient.removeQueries({
                queryKey: ['user'],
              });
              handleLogout({navigation, setLogout});
              await AsyncStorage.removeItem('nickname');
            } else {
              handleUserDelete({
                userName: userData.user.username.trim(),
                navigation,
              });
            }
          },
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
