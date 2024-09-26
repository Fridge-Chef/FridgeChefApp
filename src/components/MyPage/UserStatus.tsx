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
  console.log(Dimensions.get('window').width);
  const onLayout = (e: LayoutChangeEvent) => {
    console.log('이건 유저', e.nativeEvent.layout.height);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.userStatusContainer}>
        <ImageComponent uri={uri} imgStyle="myPage" alt="유저 이미지" />
        <View style={styles.userTextContainer}>
          <View style={styles.userNicknameContainer}>
            <View style={styles.textLine}>
              <Text style={[fontStyles.B_16, styles.textColor]}>
                {user.user.userName}님
              </Text>
            </View>
            <RankComponent rank={user.user.userRank} />
          </View>
          <View style={styles.textLine2}>
            <Text style={[fontStyles.R_14, styles.emailText]}>
              {user.user.email}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserStatus;

const styles = StyleSheet.create({
  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },

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

  textLine: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  textLine2: {
    marginTop: FWidth * 4,
    height: FWidth * 20,
    justifyContent: 'center',
  },

  userTextContainer: {
    marginLeft: FWidth * 16,
  },

  userNicknameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emailText: {
    color: colors.btnBG,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
