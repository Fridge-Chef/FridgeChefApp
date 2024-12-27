import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import RecipeActions from './RecipeActions';
import UserImage from './UserImage';
import {UserData} from '../../type/types';
import UserChangeInput from './UserChangeInput';

type UserStatus = {
  userData: UserData;
  refetch?: () => void;
  dataCount: {
    commentCount: number;
    recipeCount: number;
  };
};

const UserStatus = ({userData, dataCount, refetch}: UserStatus) => {
  const [changeOpen, setChangeOpen] = useState(false);
  const [userNickname, setUserNickname] = useState<string>(
    userData.user.username,
  );

  return (
    <Pressable style={styles.container} onPress={() => setChangeOpen(false)}>
      <UserImage
        uri={userData?.user.profileLink}
        onPress={() => setChangeOpen(true)}
      />
      {changeOpen ? (
        <UserChangeInput
          setChangeOpen={setChangeOpen}
          value={userNickname!}
          refetch={refetch}
          onChangeText={text => setUserNickname(text)}
        />
      ) : (
        <View style={styles.userNicknameContainer}>
          <FText
            fStyle="B_18"
            color={colors.text}
            text={userData?.user.username}
          />
          <FText fStyle="M_16" color={colors.text} text={'님'} />
          {/* <RankComponent rank={user.user.userRank} /> */}
        </View>
      )}
      <FText
        mTop={FWidth * 4}
        fStyle="R_14"
        color={colors.btnBG}
        text={`${userData?.user.email}`}
      />
      <RecipeActions
        userRecipeList={dataCount.recipeCount}
        userCommentList={dataCount.commentCount}
      />
    </Pressable>
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
