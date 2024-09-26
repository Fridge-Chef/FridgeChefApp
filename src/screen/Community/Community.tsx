import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';
import FText from '../../components/elements/FText';

const Community = () => {
  return (
    <View style={styles.container}>
      <FText fontStyle="B_20" text="김민영" color={colors.warning} mTop={32} />
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
