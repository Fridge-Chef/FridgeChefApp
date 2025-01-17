import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {colors, FWidth} from '../../../globalStyle';
import {useGetUser, useUserBoardCount} from '../../api/userQuery';
import MenuList from '../../components/MyPage/MenuList';
import UserStatus from '../../components/MyPage/UserStatus';
import FText from '../../components/elements/FText';
import Loading from '../../components/elements/Loading';
import {UserData} from '../../type/types';
import NotLoginUser from './NotLoginUser';

const MyPage = () => {
  const [user, setUser] = useState<UserData>();
  const {data, isLoading, refetch} = useGetUser();
  const {data: dataCount, isLoading: countLoading} = useUserBoardCount();
  useEffect(() => {
    setUser(data);
  }, [data]);

  if (isLoading || countLoading) return <Loading loadingTitle="로딩중" />;

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
          <UserStatus userData={user} dataCount={dataCount} refetch={refetch} />
          <MenuList userData={user} />
          <View style={styles.versionContainer}>
            <FText
              fStyle="M_12"
              color={colors.b400}
              text={`v${Config.APP_VERSION}`}
            />
          </View>
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

  versionContainer: {
    alignItems: 'center',
    paddingTop: FWidth * 30,
  },
});
