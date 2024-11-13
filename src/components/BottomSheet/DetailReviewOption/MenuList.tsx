import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../elements/FText';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';

type MenuListProps = {
  updateOnPress: () => void;
  deleteOnPress: () => void;
};

const MenuList = ({updateOnPress, deleteOnPress}: MenuListProps) => {
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.menuContainer}
        onPress={updateOnPress}>
        <FText fStyle="R_16" color={colors.text} text={'수정하기'} />
      </FButton>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.menuContainer}
        onPress={deleteOnPress}>
        <FText fStyle="R_16" color={colors.text} text={'삭제하기'} />
      </FButton>
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
