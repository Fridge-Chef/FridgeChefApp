import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import ImageComponent from '../elements/ImageComponent';
import RankComponent from './RankComponent';
import {userInfo} from '../../utils/list';
import FText from '../elements/FText';

type UserStatus = {
  user: {
    userName: string;
    email: string;
    userImg: any;
    userRank: string;
  };
};

const UserStatus = () => {
  const user: UserStatus = userInfo;
  const {uri} = Image.resolveAssetSource(user.user.userImg);

  return (
    <View style={styles.container}>
      <View style={styles.userStatusContainer}>
        <ImageComponent uri={uri} imgStyle="myPage" alt="유저 이미지" />
        <View style={styles.userTextContainer}>
          <View style={styles.userNicknameContainer}>
            <FText
              fStyle="B_16"
              color={colors.text}
              text={`${user.user.userName}님`}
            />
            <RankComponent rank={user.user.userRank} />
          </View>
          <FText
            mTop={FWidth * 4}
            fStyle="R_14"
            color={colors.btnBG}
            text={`${user.user.email}`}
          />
        </View>
      </View>
    </View>
  );
};

export default UserStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  userStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: FWidth * 24,
    borderRadius: 14,
    backgroundColor: colors.background3,
    borderWidth: 1,
    borderColor: colors.disabled2,
  },

  userTextContainer: {
    marginLeft: FWidth * 16,
  },

  userNicknameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
