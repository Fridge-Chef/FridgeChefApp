import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

const NoData = () => {
  return (
    <View style={styles.container}>
      <FText
        fStyle="R_16"
        color={colors.b400}
        text={'맛있는 요리를 만드셨나요?'}
      />
      <FText fStyle="R_16" color={colors.b400} text={'후기를 공유해주세요!'} />
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 52,
    alignItems: 'center',
  },
});
