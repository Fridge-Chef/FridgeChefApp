import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import UserStatus from '../../components/MyPage/UserStatus';
import MenuList from '../../components/MyPage/MenuList';
import FText from '../../components/elements/FText';
import NotLoginUser from './NotLoginUser';
import {useGetUser} from '../../api/userQuery';
import Loading from '../../components/elements/Loading';
import {UserData} from '../../type/types';

const MyPage = () => {
  const [user, setUser] = useState<UserData>();
  const {data, isLoading} = useGetUser();

  useEffect(() => {
    setUser(data);
  }, [data]);

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <FText fStyle="B_18" color={colors.text} text="설정" />
      </View>

      {user ? (
        <ScrollView
          style={styles.paddingContainer}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}>
          <UserStatus userData={user} />
          <MenuList userData={user} />
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
