import {StyleSheet, View} from 'react-native';
import React from 'react';
import Wallet from '../../Svg/Wallet';
import TabHeart from '../../Svg/TabHeart';
import More from '../../Svg/More';
import EditSquare from '../../Svg/EditSquare';
import {FWidth} from '../../../../globalStyle';
type IconComponentProps = {
  focused: boolean;
  name: string;
};

const IconComponent = ({focused, name}: IconComponentProps) => {
  switch (name) {
    case '나의 냉장고':
      return (
        <View style={styles.container}>
          <Wallet focused={focused} />
        </View>
      );
    case '레시피북':
      return (
        <View style={styles.container}>
          <TabHeart focused={focused} />
        </View>
      );
    case '커뮤니티':
      return (
        <View style={styles.container}>
          <EditSquare focused={focused} />
        </View>
      );
    case '더보기':
      return (
        <View style={styles.container}>
          <More focused={focused} />
        </View>
      );
    default:
      break;
  }
};

export default IconComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 14,
  },
});
