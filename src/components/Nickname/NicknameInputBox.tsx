import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import FInput from '../elements/FInput';
import {colors, fontFamilies, FWidth} from '../../../globalStyle';

type NicknameInputBoxProps = {
  nickname: string;
  setNickname: (nickname: string) => void;
};

const NicknameInputBox = ({nickname, setNickname}: NicknameInputBoxProps) => {
  return (
    <View style={styles.nicknameContainer}>
      <FText
        mBottom={FWidth * 24}
        fStyle="B_20"
        color={colors.text}
        text={'닉네임부터 정해볼까요?'}
      />
      <FInput
        value={nickname}
        inputStyle="recipe"
        placeholder="최소 2글자, 최대 10글자"
        autoFocus={true}
        maxLength={10}
        onChangeText={setNickname}
        fontFamily={fontFamilies.pretendardRegular}
      />
    </View>
  );
};

export default NicknameInputBox;

const styles = StyleSheet.create({
  nicknameContainer: {
    marginTop: FWidth * 64,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 56,
  },
});
