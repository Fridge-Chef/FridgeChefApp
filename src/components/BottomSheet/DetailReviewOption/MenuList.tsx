import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FText from '../../elements/FText';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import FModal from '../../elements/FModal';

const MenuList = () => {
  const [updateClicked, setUpdateClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.menuContainer}
        onPress={() => setUpdateClicked(true)}>
        <FText fStyle="R_16" color={colors.text} text={'수정하기'} />
      </FButton>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.menuContainer}
        onPress={() => setDeleteClicked(true)}>
        <FText fStyle="R_16" color={colors.text} text={'삭제하기'} />
      </FButton>
      {updateClicked && (
        <FModal
          buttonText="확인"
          text="수정이 완료되었습니다"
          modalVisible
          onPress={() => {
            setUpdateClicked(false);
          }}
        />
      )}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  menuContainer: {
    paddingVertical: FWidth * 12,
  },
});
