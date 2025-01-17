import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../../globalStyle';
import AddTitleInput from './AddTitleInput';

type FootTitleProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const FootTitle = ({value, onChangeText}: FootTitleProps) => {
  return (
    <View style={styles.inputContainer}>
      <AddTitleInput value={value} onChangeText={onChangeText} />
    </View>
  );
};

export default FootTitle;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FWidth * 8,
  },
});
