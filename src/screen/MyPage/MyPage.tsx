import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';

const MyPage = () => {
  return (
    <View>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
