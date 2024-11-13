import {StyleSheet} from 'react-native';
import React from 'react';
import FModal from '../FModal';

type LoginModalProps = {
  loginCheck: boolean;
  onPress: () => void;
  cancelOnPress: () => void;
};

const LoginModal = ({loginCheck, onPress, cancelOnPress}: LoginModalProps) => {
  return (
    <>
      {loginCheck && (
        <FModal
          modalVisible={loginCheck}
          buttonText="로그인"
          text="로그인이 필요한 서비스입니다."
          onPress={onPress}
          cancel={true}
          cancelText="취소"
          cancelOnPress={cancelOnPress}
        />
      )}
    </>
  );
};

export default LoginModal;

const styles = StyleSheet.create({});
