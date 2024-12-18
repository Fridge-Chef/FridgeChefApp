import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../api/axios';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {userUpdateNickname} from '../../api/user';

type NicknameProps = {
  nickname: string;
  navigation?: NativeStackNavigationProp<ParamListBase>;
};

export const userNickname = async ({nickname, navigation}: NicknameProps) => {
  try {
    const userNickname = await userUpdateNickname({nickname});
    if (userNickname === 200) {
      navigation?.navigate('addBasic');
      await AsyncStorage.setItem('nickname', nickname);
      return userNickname;
    }
  } catch (error) {
    console.log('닉네임 페이지', error);
  }
};
