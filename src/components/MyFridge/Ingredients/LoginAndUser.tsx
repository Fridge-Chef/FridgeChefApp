import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import Notification from '../../../utils/Svg/Notification';
import FText from '../../elements/FText';
import NotLoginUser from '../../../utils/Svg/NotLoginUser';
import {getToken, getUserData} from '../../../service/MyFridge/MyFridge';
import {UserData} from '../../../type/types';

const LoginAndUser = () => {
  const [userToken, setUserToken] = useState<string | null>('');
  const [user, setUser] = useState<UserData>({
    user: {
      createAt: '',
      role: '',
      email: '',
      profileLink: '',
      username: '',
    },
  });

  const getUserToken = async () => {
    const token = await getToken();
    setUserToken(token);
  };

  useEffect(() => {
    getUserData({setUser});
    getUserToken();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !userToken ? colors.background3 : colors.primary[4],
        },
      ]}>
      {!userToken ? (
        <View style={styles.alignCenter}>
          <NotLoginUser />
          <FText
            mLeft={FWidth * 8}
            fStyle="B_16"
            text="로그인"
            color={colors.text}
          />
          <FText fStyle="R_16" text="이 필요해요." color={colors.text} />
        </View>
      ) : (
        <View style={styles.userContainer}>
          <View style={styles.alignCenter}>
            <NotLoginUser />
            <View style={styles.alignCenter}>
              <FText
                mLeft={FWidth * 8}
                fStyle="B_16"
                text={user.user.username}
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
