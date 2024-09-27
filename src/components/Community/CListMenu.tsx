import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {menuList} from '../../utils/list';
import FButton from '../elements/FButton';
import FText from '../elements/FText';
import {colors, FWidth} from '../../../globalStyle';

type CListMenuProps = {
  list: {
    id: number;
    text: string;
  }[];
};

const CListMenu = ({list}: CListMenuProps) => {
  const [onClick, setonClick] = useState(1);
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
    flexDirection: 'row',
    alignItems: 'center',
  },
});
