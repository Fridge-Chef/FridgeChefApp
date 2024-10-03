import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {menuList} from '../../utils/list';
import FButton from '../elements/FButton';
import FText from '../elements/FText';
import {colors, FWidth} from '../../../globalStyle';

type CListMenuProps = {
  onClick: number;
  setonClick: (id: number) => void;
  list: {
    id: number;
    text: string;
  }[];
};

const CListMenu = ({onClick, setonClick, list}: CListMenuProps) => {
  return (
    <View style={styles.container}>
      {list.map(item => (
        <FButton
          key={item.id}
          buttonStyle="menuButton"
          fBStyle={{
            backgroundColor: onClick === item.id ? colors.black : colors.b100,
            marginRight: FWidth * 8,
          }}
          onPress={() => setonClick(item.id)}>
          <FText
            fStyle="M_14"
            text={item.text}
            color={onClick === item.id ? colors.white : colors.black}
          />
        </FButton>
      ))}
    </View>
  );
};

export default CListMenu;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
