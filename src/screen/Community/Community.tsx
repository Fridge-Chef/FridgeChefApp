import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../globalStyle';

const Community = () => {
  return (
    <View style={styles.container}>
      <Text>Community</Text>
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
