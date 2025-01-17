import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import {userNickname} from '../../service/Nickname/Nickname';
import FButton from '../elements/FButton';
import FInput from '../elements/FInput';

type UserChangeInput = {
  value: string;
  onChangeText: (text: string) => void;
  setChangeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: () => void;
};

const UserChangeInput = ({
  value,
  onChangeText,
  setChangeOpen,
  refetch,
}: UserChangeInput) => {
  const submit = async () => {
    if (value.length < 3) return;
    const changeName = await userNickname({nickname: value});
    console.log(changeName);
    if (changeName === 200) {
      refetch && refetch();
      setChangeOpen(false);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={{flex: 1, paddingHorizontal: FWidth * 8}}>
        <FInput
          inputStyle="userNickname"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <FButton
        buttonStyle="noneStyle"
        onPress={submit}
        titleColor={value?.length > 2 ? colors.white : colors.text}
        fBStyle={[
          styles.buttonStyle,
          {
            backgroundColor:
              value?.length > 2 ? colors.primary[1] : colors.b200,
          },
        ]}
        title="확인"
      />
    </View>
  );
};

export default UserChangeInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: FWidth * 16,
    width: '100%',
  },

  buttonStyle: {
    padding: FWidth * 13,
    borderRadius: 10,
  },
});
