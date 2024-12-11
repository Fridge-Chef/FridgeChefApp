import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import RecipeActions from './RecipeActions';
import UserImage from './UserImage';
import {UserData} from '../../type/types';

type UserStatus = {
  userData: UserData;
};

const UserStatus = ({userData}: UserStatus) => {
  return (
    <View style={styles.container}>
      <UserImage
        uri={userData?.user.profileLink}
        onPress={() => console.log('저보변경')}
      />
      <View style={styles.userNicknameContainer}>
        <FText
          fStyle="B_18"
          color={colors.text}
          text={userData?.user.username}
        />
        <FText fStyle="M_16" color={colors.text} text={'님'} />
        {/* <RankComponent rank={user.user.userRank} /> */}
      </View>
      <FText
        mTop={FWidth * 4}
        fStyle="R_14"
        color={colors.btnBG}
        text={`${userData?.user.email}`}
      />
      <RecipeActions />
    </View>
  );
};

export default UserStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    alignItems: 'center',
    paddingTop: FWidth * 32,
    paddingBottom: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    borderRadius: 14,
    backgroundColor: colors.background2,
    borderColor: colors.disabled2,
  },

  userNicknameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: FWidth * 16,
  },
});
