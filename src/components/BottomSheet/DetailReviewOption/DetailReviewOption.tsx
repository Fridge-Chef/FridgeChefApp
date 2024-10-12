import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Close3 from '../../../utils/Svg/Close3';
import Close2 from '../../../utils/Svg/Close2';
import Close from '../../../utils/Svg/Close';
import BottomClose from '../../../utils/Svg/BottomClose';
import {colors, FWidth} from '../../../../globalStyle';
import TopClose from './TopClose';
import FText from '../../elements/FText';
import MenuList from './MenuList';

const DetailReviewOption = () => {
  return (
    <View style={styles.container}>
      <TopClose />
      <MenuList />
    </View>
  );
};

export default DetailReviewOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 16,
  },
});
