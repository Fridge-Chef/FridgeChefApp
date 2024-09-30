import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import Close from '../../../utils/Svg/Close';
import FButton from '../../elements/FButton';
import {useBottomSheetRef} from '../../../store/store';

type TopMenuProps = {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
  setItemList: React.Dispatch<React.SetStateAction<string[]>>;
  setItemList2: React.Dispatch<React.SetStateAction<string[]>>;
};

const TopMenu = ({
  isClicked,
  setIsClicked,
  setItemList,
  setItemList2,
}: TopMenuProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const list = [
    {id: 1, title: '냉장고 재료 등록'},
    {id: 2, title: '실온보관 재료 등록'},
  ];

  const handleClose = () => {
    setIsClicked(1);
    setItemList([]);
    setItemList2([]);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <View style={styles.closeIcon}>
        <FButton buttonStyle="noneStyle" onPress={handleClose}>
          <Close />
        </FButton>
      </View>
      <View style={styles.menubar}>
        {list.map((item, index) => (
          <FButton
            key={index}
            buttonStyle="indicator"
            onPress={() => setIsClicked(item.id)}>
            <FText
              fStyle="B_16"
              color={isClicked === item.id ? colors.text : colors.field}
              text={item.title}
            />
            <View
              style={[
                styles.indicator,
                {opacity: isClicked === item.id ? 1 : 0},
              ]}
            />
          </FButton>
        ))}
      </View>
    </>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  closeIcon: {
    alignItems: 'flex-end',
  },

  menubar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  menuTitle: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    paddingVertical: FWidth * 16,
    borderBottomWidth: 1,
    borderColor: colors.b200,
  },

  indicator: {
    position: 'absolute',
    bottom: 1,
    marginBottom: FWidth * -2,
    width: '100%',
    borderTopWidth: 2,
    borderColor: colors.text,
  },
});
