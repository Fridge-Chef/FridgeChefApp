import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
import FText from './FText';
import {colors, FWidth} from '../../../globalStyle';
import FModal from './FModal';

type AppBarMenuProps = {
  id: number;
  updateOnPress: () => void;
  deleteOnPress: () => void;
};

const AppBarMenu = ({id, updateOnPress, deleteOnPress}: AppBarMenuProps) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableHighlight
        underlayColor={colors.b100}
        style={styles.textContainer}
        onPress={updateOnPress}>
        <FText fStyle="R_16" color={colors.text} text={'수정하기'} />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={colors.b100}
        style={styles.textContainer}
        onPress={deleteOnPress}>
        <FText fStyle="R_16" color={colors.text} text={'삭제하기'} />
      </TouchableHighlight>
    </View>
  );
};

export default AppBarMenu;

const styles = StyleSheet.create({
  menuContainer: {
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
