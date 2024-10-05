import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

const Submit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
        <FText fStyle="M_18" color={colors.text} text="미리보기" />
      </View>
      <View style={styles.submitButton}>
        <FText fStyle="B_18" color={colors.white} text="작성완료" />
      </View>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
    paddingVertical: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.b100,
  },
  viewButton: {
    paddingVertical: FWidth * 10,
    paddingHorizontal: FWidth * 22,
    marginRight: FWidth * 10,
    borderRadius: 8,
    backgroundColor: colors.b100,
  },

  submitButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: FWidth * 10,
    borderRadius: 8,
    backgroundColor: colors.primary[1],
  },
});
