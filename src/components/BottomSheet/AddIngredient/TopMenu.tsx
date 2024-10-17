import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import FButton from '../../elements/FButton';
import BottomClose from '../../../utils/Svg/BottomClose';

type TopMenuProps = {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
  onPress: () => void;
};

const TopMenu = ({isClicked, setIsClicked, onPress}: TopMenuProps) => {
  const list = [
    {id: 1, title: '냉장고 재료'},
    {id: 2, title: '실온보관 재료'},
  ];

  return (
    <>
      <View style={styles.closeIcon}>
        <FButton buttonStyle="noneStyle" onPress={onPress}>
          <BottomClose />
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
