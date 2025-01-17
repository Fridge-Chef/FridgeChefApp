import React from 'react';
import {StyleSheet} from 'react-native';
import FModal from '../FModal';

type DeleteModalProps = {
  modalCheck: boolean;
  deleteCheck: boolean;
  onPress: () => void;
  cancelOnPress: () => void;
};

const DeleteModal = ({
  modalCheck,
  deleteCheck,
  onPress,
  cancelOnPress,
}: DeleteModalProps) => {
  return (
    <>
      {modalCheck && (
        <FModal
          modalVisible={modalCheck}
          buttonText={deleteCheck ? '삭제' : '확인'}
          cancelText="취소"
          cancel={deleteCheck ? true : false}
          text={
            deleteCheck
              ? '정말로 이글을 삭제하시겠습니까?'
              : '삭제가 완료되었습니다.'
          }
          text2={deleteCheck ? '삭제한 글은 복구할 수 없습니다.' : null}
          onPress={onPress}
          cancelOnPress={cancelOnPress}
        />
      )}
    </>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({});
