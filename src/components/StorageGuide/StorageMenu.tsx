import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FButton from '../elements/FButton';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type StorageMenuProps = {
  isClicked: number;
  setIsClicked: (id: number) => void;
};

const StorageMenu = ({isClicked, setIsClicked}: StorageMenuProps) => {
  const menuList = [
    {id: 1, name: '냉장 보관 재료'},
    {id: 2, name: '실온 보관 재료'},
  ];
  return (
    <View style={styles.container}>
      {menuList.map(menu => (
        <FButton
          key={menu.id}
          buttonStyle="addButton2"
          fBStyle={[
            styles.buttonStyle,
            {
              backgroundColor:
                isClicked === menu.id ? colors.text : colors.background,
            },
          ]}
          onPress={() => setIsClicked(menu.id)}>
          <FText
            fStyle="B_16"
            color={isClicked === menu.id ? colors.white : colors.black}
            text={menu.name}
          />
        </FButton>
      ))}
    </View>
  );
};

export default StorageMenu;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonStyle: {
    marginRight: FWidth * 8,
  },
});
