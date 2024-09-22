import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgImage from '../../elements/SvgImage';
type IconComponentProps = {
  focused: boolean;
  name: string;
};

const IconComponent = ({focused, name}: IconComponentProps) => {
  switch (name) {
    case '나의 냉장고':
      return (
        <View style={styles.container}>
          <SvgImage
            type="wallet"
            width={24}
            height={24}
            fill={focused ? '#2C2C2E' : '#BCBCC4'}
            stroke={focused ? '#2C2C2E' : '#BCBCC4'}
          />
        </View>
      );
    case '레시피북':
      return (
        <View style={styles.container}>
          <SvgImage
            type="heart"
            width={24}
            height={24}
            fill={focused ? '#2C2C2E' : '#BCBCC4'}
            stroke={focused ? '#2C2C2E' : '#BCBCC4'}
          />
        </View>
      );
    case '커뮤니티':
      return (
        <View style={styles.container}>
          <SvgImage
            type="editSquare"
            width={24}
            height={24}
            fill={focused ? '#2C2C2E' : '#BCBCC4'}
            stroke={focused ? '#2C2C2E' : '#BCBCC4'}
          />
        </View>
      );
    case '더보기':
      return (
        <View style={styles.container}>
          <SvgImage
            type="moreCircle"
            width={24}
            height={24}
            fill={focused ? '#2C2C2E' : '#BCBCC4'}
            stroke={focused ? '#2C2C2E' : '#BCBCC4'}
          />
        </View>
      );
    default:
      break;
  }
};

export default IconComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },
});
