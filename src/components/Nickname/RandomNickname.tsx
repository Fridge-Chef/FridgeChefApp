import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type RandomNicknameProps = {
  setNickname: (nickname: string) => void;
};

const RandomNickname = ({setNickname}: RandomNicknameProps) => {
  const nicknames = [
    '초코파이',
    '허니버터칩',
    '포카칩',
    '오레오',
    '프링글스',
    '페레로로쉐',
  ];

  return (
    <View style={styles.container}>
      <FText
        fStyle="M_16"
        color={colors.text}
        text={'고민이 된다면, 랜덤 닉넴을 선택해보세요.'}
      />
      <View style={styles.buttonContainer}>
        {nicknames.map((nickname, index) => (
          <FButton
            key={index}
            buttonStyle="menuButton2"
            title={nickname}
            titleColor={colors.black}
            fBStyle={styles.buttonColor}
            onPress={() => setNickname(nickname)}
          />
        ))}
      </View>
    </View>
  );
};

export default RandomNickname;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 10,
  },

  buttonContainer: {
    marginTop: FWidth * 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  buttonColor: {
    backgroundColor: colors.background,
    marginRight: FWidth * 8,
    marginBottom: FWidth * 14,
  },
});
