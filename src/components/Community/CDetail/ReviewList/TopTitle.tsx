import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../elements/FText';
import {colors} from '../../../../../globalStyle';
import MoreButton from './MoreButton';

const TopTitle = () => {
  return (
    <View style={styles.container}>
      <FText fStyle="M_18" color={colors.text} text="다른 레시피 후기들" />
      <MoreButton />
    </View>
  );
};

export default TopTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
