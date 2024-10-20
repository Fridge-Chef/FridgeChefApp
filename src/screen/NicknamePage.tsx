import {Keyboard, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../globalStyle';
import TopLine from '../components/Nickname/TopLine';
import NicknameInputBox from '../components/Nickname/NicknameInputBox';
import RandomNickname from '../components/Nickname/RandomNickname';
import NextButton from '../components/Nickname/NextButton';

const NicknamePage = () => {
  const [nickname, setNickname] = useState('');

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <TopLine colorWidth={'50%'} />
      <NicknameInputBox nickname={nickname} setNickname={setNickname} />
      <RandomNickname setNickname={setNickname} />
      <NextButton nickname={nickname} />
    </Pressable>
  );
};

export default NicknamePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
