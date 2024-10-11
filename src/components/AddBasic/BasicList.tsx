import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';

const BasicList = () => {
  return (
    <View style={styles.container}>
      <Text>BasicList</Text>
    </View>
  );
};

export default BasicList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },
});
