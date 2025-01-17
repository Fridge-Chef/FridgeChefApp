import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {useGetUser} from '../../../api/userQuery';
import {UserData} from '../../../type/types';
import Notification from '../../../utils/Svg/Notification';
import NotLoginUser from '../../../utils/Svg/NotLoginUser';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import Loading from '../../elements/Loading';

const LoginAndUser = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [user, setUser] = useState<UserData>();
  const {data, isLoading, refetch} = useGetUser();

  useEffect(() => {
    setUser(data);
    refetch();
  }, [data]);

  if (isLoading) return <Loading loadingTitle="검색중" />;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !user ? colors.background3 : colors.primary[4],
        },
      ]}>
      {!data ? (
        <FButton
          buttonStyle="noneStyle"
          fBStyle={styles.alignCenter}
          onPress={() => navigation.navigate('serviceLogin')}>
          <NotLoginUser />
          <FText
            mLeft={FWidth * 8}
            fStyle="B_16"
            text="로그인"
            color={colors.text}
          />
          <FText fStyle="R_16" text="이 필요해요." color={colors.text} />
        </FButton>
      ) : (
        <View style={styles.userContainer}>
          <View style={styles.alignCenter}>
            <NotLoginUser />
            <View style={styles.alignCenter}>
              <FText
                mLeft={FWidth * 8}
                fStyle="B_16"
                text={user?.user.username}
                color={colors.text}
              />
              <FText
                fStyle="M_16"
                color={colors.text}
                text="님의 냉장고입니다."
              />
            </View>
          </View>
          <Notification />
        </View>
      )}
    </View>
  );
};

export default LoginAndUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 22,
    paddingVertical: FWidth * 12,
  },

  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
