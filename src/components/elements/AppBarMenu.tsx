import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
import FText from './FText';
import {colors, FWidth} from '../../../globalStyle';
import FModal from './FModal';

const AppBarMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsClicked(false);
    setIsDeleted(false);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableHighlight
        underlayColor={colors.b100}
        style={styles.textContainer}
        onPress={() => {}}>
        <FText fStyle="R_16" color={colors.text} text={'수정하기'} />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={colors.b100}
        style={styles.textContainer}
        onPress={() => setIsClicked(true)}>
        <FText fStyle="R_16" color={colors.text} text={'삭제하기'} />
      </TouchableHighlight>
      {isClicked && (
        <FModal
          modalVisible={true}
          buttonText={!isDeleted ? '삭제' : '확인'}
          cancelText="취소"
          cancel={!isDeleted ? true : false}
          text={
            isDeleted
              ? '삭제가 완료되었습니다.'
              : '정말로 이글을 삭제하시겠습니까?'
          }
          text2={isDeleted ? null : '삭제한 글은 복구할 수 없습니다.'}
          onPress={() => {
            !isDeleted ? setIsDeleted(!isDeleted) : handleDelete();
          }}
          cancelOnPress={() => setIsClicked(false)}
        />
      )}
    </View>
  );
};

export default AppBarMenu;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    right: 22,
    top: FWidth * 60,
    width: FWidth * 140,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderColor: colors.border,
  },

  textContainer: {
    padding: FWidth * 12,
    width: '100%',
  },
});
