import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import UserStatus from '../../components/MyPage/UserStatus';
import MenuList from '../../components/MyPage/MenuList';
import FText from '../../components/elements/FText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotLoginUser from './NotLoginUser';
import {UserData} from '../../type/types';
import {getUserData} from '../../service/MyFridge/MyFridge';

const MyPage = () => {
  const [userToken, setUserToken] = useState<string | null>('');
  const [userData, setUserData] = useState<UserData>({
    user: {
      createAt: '',
      role: '',
      email: '',
      profileLink: '',
      username: '',
    },
  });
  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setUserToken(token);
  };

  useEffect(() => {
    getUserToken();
    if (userToken) {
      getUserData({setUser: setUserData});
    }
  }, [userToken]);
  console.log('userData', userData);
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <FText fStyle="B_18" color={colors.text} text="설정" />
      </View>

      {userToken ? (
        <ScrollView
          style={styles.paddingContainer}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}>
          <UserStatus userData={userData} />
          <MenuList userData={userData} />
        </ScrollView>
      ) : (
        <View style={styles.paddingContainer}>
          <NotLoginUser />
        </View>
      )}
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  mainTitleContainer: {
    paddingVertical: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  paddingContainer: {
    paddingHorizontal: FWidth * 22,
  },
});
