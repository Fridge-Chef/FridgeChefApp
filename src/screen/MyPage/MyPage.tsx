import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import UserStatus from '../../components/MyPage/UserStatus';
import MenuList from '../../components/MyPage/MenuList';
import FText from '../../components/elements/FText';
import NotLoginUser from './NotLoginUser';
import {useGetUser} from '../../api/userQuery';
import Loading from '../../components/elements/Loading';

const MyPage = () => {
  const {data, isLoading} = useGetUser();
  console.log('유저정보', data);
  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <FText fStyle="B_18" color={colors.text} text="설정" />
      </View>

      {data ? (
        <ScrollView
          style={styles.paddingContainer}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}>
          <UserStatus userData={data} />
          <MenuList userData={data} />
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
