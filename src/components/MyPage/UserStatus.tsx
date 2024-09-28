import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import RankComponent from './RankComponent';
import {userInfo} from '../../utils/list';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import RecipeActions from './RecipeActions';

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
      <FImage
        uri={uri}
        imgStyle="myPage"
        resizeMode="stretch"
        alt="유저 이미지"
      />
      <View style={styles.userTextContainer}>
        <View style={styles.userNicknameContainer}>
          <FText
            fStyle="B_18"
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
      <RecipeActions />
    </View>
  );
};

export default UserStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    alignItems: 'center',
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    borderRadius: 14,
    backgroundColor: colors.background2,
    borderColor: colors.disabled2,
  },

  userTextContainer: {
    marginLeft: FWidth * 16,
  },

  userNicknameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: FWidth * 12,
  },
});
